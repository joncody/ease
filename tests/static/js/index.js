import ease, {
    easeInOutQuad,
    easeOutExpo,
    linearTween
} from "../../../src/ease.js";

function create_test_runner() {
    const results_container = document.getElementById("test-results");
    const summary_container = document.getElementById("summary");

    let current_group_body = null;
    let failed_assertions = 0;
    let passed_assertions = 0;
    let total_assertions = 0;

    function group(title) {
        if (current_group_body !== null) {
            console.groupEnd();
        }
        console.group(title);

        const group_el = document.createElement("div");
        const header_el = document.createElement("div");

        group_el.className = "test-group";
        header_el.className = "group-header";
        header_el.textContent = title;

        current_group_body = document.createElement("div");
        current_group_body.className = "group-body";

        group_el.appendChild(header_el);
        group_el.appendChild(current_group_body);
        results_container.appendChild(group_el);
    }

    function assert(condition, message) {
        total_assertions += 1;
        const entry = document.createElement("div");

        if (condition === true) {
            passed_assertions += 1;
            entry.className = "log-entry pass";
            entry.textContent = "[PASS] " + message;
            console.log("[PASS] " + message);
        } else {
            failed_assertions += 1;
            entry.className = "log-entry fail";
            entry.textContent = "[FAIL] " + message;
            console.error("[FAIL] " + message);
        }

        if (current_group_body !== null) {
            current_group_body.appendChild(entry);
        }
    }

    function assert_throws(fn, message) {
        total_assertions += 1;
        const entry = document.createElement("div");
        try {
            fn();
            failed_assertions += 1;
            entry.className = "log-entry fail";
            entry.textContent = "[FAIL] " + message + " (Did not throw)";
            console.error("[FAIL] " + message + " (Did not throw)");
        } catch (ignore) {
            passed_assertions += 1;
            entry.className = "log-entry pass";
            entry.textContent = "[PASS] " + message + " (Threw as expected)";
            console.log("[PASS] " + message + " (Threw as expected)");
        }

        if (current_group_body !== null) {
            current_group_body.appendChild(entry);
        }
    }

    function render_summary(start_time) {
        if (current_group_body !== null) {
            console.groupEnd();
        }

        const elapsed = performance.now() - start_time;
        const duration = Math.round(elapsed * 100) / 100;
        let status_class = "summary-fail";

        if (failed_assertions === 0) {
            status_class = "summary-pass";
        }

        const summary_text = (
            "Total Assertions: " +
            total_assertions +
            " | Passed: " +
            passed_assertions +
            " | Failed: " +
            failed_assertions +
            " | Execution Time: " +
            duration +
            " ms"
        );

        console.info(summary_text);

        summary_container.innerHTML = (
            "Total Assertions: <strong>" +
            total_assertions +
            "</strong> | Passed: <span class='" +
            status_class +
            "'>" +
            passed_assertions +
            "</span> | Failed: <span class='" +
            status_class +
            "'>" +
            failed_assertions +
            "</span> | Execution Time: <strong>" +
            duration +
            " ms</strong>"
        );
    }

    return Object.freeze({
        assert,
        assert_throws,
        group,
        render_summary
    });
}

function run_all_tests() {
    const runner = create_test_runner();
    const start_time = performance.now();

    // -------------------------------------------------------------------------
    // GROUP 1: Export Verification & Immutability
    // -------------------------------------------------------------------------
    runner.group("1. Export Verification & Immutability");

    runner.assert(
        typeof ease === "object" && ease !== null,
        "Default export is a valid object"
    );

    runner.assert(
        Object.isFrozen(ease) === true,
        "Default export object is frozen with Object.freeze()"
    );

    runner.assert(
        typeof ease.linearTween === "function",
        "Default export contains linearTween method"
    );

    runner.assert(
        typeof easeOutExpo === "function" &&
        typeof easeInOutQuad === "function",
        "Named function exports are available and functional"
    );

    runner.assert(
        Object.keys(ease).length === 22,
        "Default export object contains all 22 easing functions"
    );

    // -------------------------------------------------------------------------
    // GROUP 2: Linear Interpolation Accuracy
    // -------------------------------------------------------------------------
    runner.group("2. Linear Interpolation Accuracy");

    runner.assert(
        linearTween(0, 0, 100, 1000) === 0,
        "linearTween at t = 0 returns start value (0)"
    );

    runner.assert(
        linearTween(500, 0, 100, 1000) === 50,
        "linearTween at t = duration/2 returns midpoint value (50)"
    );

    runner.assert(
        linearTween(1000, 0, 100, 1000) === 100,
        "linearTween at t = duration returns final value (100)"
    );

    // -------------------------------------------------------------------------
    // GROUP 3: Boundary Value Verification Across All Functions
    // -------------------------------------------------------------------------
    runner.group("3. Boundary Value Verification Across All Functions");

    const function_keys = Object.keys(ease);
    const start_val = 10;
    const change_val = 90;
    const dur_val = 500;

    function_keys.forEach(function (name) {
        const fn = ease[name];
        const val_start = fn(0, start_val, change_val, dur_val);
        const val_end = fn(dur_val, start_val, change_val, dur_val);

        runner.assert(
            Math.abs(val_start - start_val) < 0.0001,
            name + "(0) returns begin value (" + start_val + ")"
        );

        runner.assert(
            Math.abs(val_end - (start_val + change_val)) < 0.0001,
            name + "(duration) returns target value (" +
            (start_val + change_val) + ")"
        );
    });

    // -------------------------------------------------------------------------
    // GROUP 4: Curve Characteristic Checks
    // -------------------------------------------------------------------------
    runner.group("4. Curve Characteristic Checks (In vs Out at Midpoint)");

    const mid_time = 250;
    const ease_in_mid = ease.easeInQuad(mid_time, 0, 100, 500);
    const ease_out_mid = ease.easeOutQuad(mid_time, 0, 100, 500);
    const linear_mid = ease.linearTween(mid_time, 0, 100, 500);

    runner.assert(
        ease_in_mid < linear_mid,
        "easeInQuad midpoint value (" + ease_in_mid + ") is below linear (" +
        linear_mid + ")"
    );

    runner.assert(
        ease_out_mid > linear_mid,
        "easeOutQuad midpoint value (" + ease_out_mid + ") is above linear (" +
        linear_mid + ")"
    );

    // -------------------------------------------------------------------------
    // GROUP 5: Parameter Validation & Division-by-Zero Guards
    // -------------------------------------------------------------------------
    runner.group("5. Parameter Validation & Division-by-Zero Guards");

    runner.assert(
        ease.easeOutQuad("invalid", 10, 100, 500) === 10,
        "Non-number time parameter returns begin value safely"
    );

    runner.assert(
        ease.easeOutQuad(250, 10, 100, 0) === 10,
        "Zero duration parameter returns begin value without throwing NaN"
    );

    runner.assert(
        ease.easeInSine(null, 10, 100, 500) === 10,
        "Null parameter returns begin value safely"
    );

    runner.render_summary(start_time);
}

run_all_tests();
