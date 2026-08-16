/**
 * @fileoverview Collection of easing functions for animations and
 * transitions based on Robert Penner's easing equations.
 */

/**
 * Determines if a value is a valid number and not NaN.
 *
 * @param {*} val - The value to test.
 * @returns {boolean} True if the value is a valid number, false otherwise.
 */
function is_number(val) {
    return typeof val === "number" && Number.isNaN(val) === false;
}

/**
 * Validates the parameters passed to an easing function.
 *
 * @param {*} time - Current time / position in the transition.
 * @param {*} begin - Starting value of the property being animated.
 * @param {*} change - Total change in value over the duration.
 * @param {*} duration - Total duration of the transition.
 * @returns {boolean} True if all arguments are valid numbers and duration
 *     is non-zero, false otherwise.
 */
function check_args(time, begin, change, duration) {
    if (
        is_number(time) === false ||
        is_number(begin) === false ||
        is_number(change) === false ||
        is_number(duration) === false ||
        duration === 0
    ) {
        return false;
    }
    return true;
}

/**
 * Accelerates motion along a circular curve (ease-in).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInCirc(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (-change * (Math.sqrt(1 - (n * n)) - 1)) + begin;
}

/**
 * Accelerates motion using a cubic curve (ease-in).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInCubic(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (change * n * n * n) + begin;
}

/**
 * Accelerates motion using an exponential curve (ease-in).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInExpo(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    if (time === 0) {
        return begin;
    }
    return (change * Math.pow(2, 10 * ((time / duration) - 1))) + begin;
}

/**
 * Accelerates and decelerates along a circular curve (ease-in-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInOutCirc(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / (duration / 2);
    if (n < 1) {
        return (-change / 2 * (Math.sqrt(1 - (n * n)) - 1)) + begin;
    }
    const p = n - 2;
    return (change / 2 * (Math.sqrt(1 - (p * p)) + 1)) + begin;
}

/**
 * Accelerates and decelerates using a cubic curve (ease-in-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInOutCubic(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / (duration / 2);
    if (n < 1) {
        return (change / 2 * n * n * n) + begin;
    }
    const p = n - 2;
    return (change / 2 * ((p * p * p) + 2)) + begin;
}

/**
 * Accelerates and decelerates using an exponential curve (ease-in-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInOutExpo(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    if (time === 0) {
        return begin;
    }
    if (time === duration) {
        return begin + change;
    }
    const n = time / (duration / 2);
    if (n < 1) {
        return (change / 2 * Math.pow(2, 10 * (n - 1))) + begin;
    }
    const p = n - 1;
    return (change / 2 * (-Math.pow(2, -10 * p) + 2)) + begin;
}

/**
 * Accelerates and decelerates using a quadratic curve (ease-in-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInOutQuad(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / (duration / 2);
    if (n < 1) {
        return (change / 2 * n * n) + begin;
    }
    const p = n - 1;
    return (-change / 2 * ((p * (p - 2)) - 1)) + begin;
}

/**
 * Accelerates and decelerates using a quartic curve (ease-in-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInOutQuart(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / (duration / 2);
    if (n < 1) {
        return (change / 2 * n * n * n * n) + begin;
    }
    const p = n - 2;
    return (-change / 2 * ((p * p * p * p) - 2)) + begin;
}

/**
 * Accelerates and decelerates using a quintic curve (ease-in-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInOutQuint(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / (duration / 2);
    if (n < 1) {
        return (change / 2 * n * n * n * n * n) + begin;
    }
    const p = n - 2;
    return (change / 2 * ((p * p * p * p * p) + 2)) + begin;
}

/**
 * Accelerates and decelerates along a sinusoidal curve (ease-in-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInOutSine(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    return (-change / 2 * (Math.cos((Math.PI * time) / duration) - 1)) + begin;
}

/**
 * Accelerates motion using a quadratic curve (ease-in).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInQuad(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (change * n * n) + begin;
}

/**
 * Accelerates motion using a quartic curve (ease-in).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInQuart(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (change * n * n * n * n) + begin;
}

/**
 * Accelerates motion using a quintic curve (ease-in).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInQuint(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (change * n * n * n * n * n) + begin;
}

/**
 * Accelerates motion along a sinusoidal curve (ease-in).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeInSine(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    return (
        (-change * Math.cos((time / duration) * (Math.PI / 2))) +
        change +
        begin
    );
}

/**
 * Decelerates motion along a circular curve (ease-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeOutCirc(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = (time / duration) - 1;
    return (change * Math.sqrt(1 - (n * n))) + begin;
}

/**
 * Decelerates motion using a cubic curve (ease-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeOutCubic(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = (time / duration) - 1;
    return (change * ((n * n * n) + 1)) + begin;
}

/**
 * Decelerates motion using an exponential curve (ease-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeOutExpo(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    if (time === duration) {
        return begin + change;
    }
    return (change * (-Math.pow(2, (-10 * time) / duration) + 1)) + begin;
}

/**
 * Decelerates motion using a quadratic curve (ease-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeOutQuad(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (-change * n * (n - 2)) + begin;
}

/**
 * Decelerates motion using a quartic curve (ease-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeOutQuart(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = (time / duration) - 1;
    return (-change * ((n * n * n * n) - 1)) + begin;
}

/**
 * Decelerates motion using a quintic curve (ease-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeOutQuint(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = (time / duration) - 1;
    return (change * ((n * n * n * n * n) + 1)) + begin;
}

/**
 * Decelerates motion along a sinusoidal curve (ease-out).
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function easeOutSine(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    return (change * Math.sin((time / duration) * (Math.PI / 2))) + begin;
}

/**
 * Performs linear interpolation with constant velocity.
 *
 * @param {number} time - Current time.
 * @param {number} begin - Starting value.
 * @param {number} change - Total change in value over the duration.
 * @param {number} duration - Total duration of the transition.
 * @returns {number} Interpolated value at current time.
 */
function linearTween(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    return ((change * time) / duration) + begin;
}

export {
    easeInCirc,
    easeInCubic,
    easeInExpo,
    easeInOutCirc,
    easeInOutCubic,
    easeInOutExpo,
    easeInOutQuad,
    easeInOutQuart,
    easeInOutQuint,
    easeInOutSine,
    easeInQuad,
    easeInQuart,
    easeInQuint,
    easeInSine,
    easeOutCirc,
    easeOutCubic,
    easeOutExpo,
    easeOutQuad,
    easeOutQuart,
    easeOutQuint,
    easeOutSine,
    linearTween
};

export default Object.freeze({
    easeInCirc,
    easeInCubic,
    easeInExpo,
    easeInOutCirc,
    easeInOutCubic,
    easeInOutExpo,
    easeInOutQuad,
    easeInOutQuart,
    easeInOutQuint,
    easeInOutSine,
    easeInQuad,
    easeInQuart,
    easeInQuint,
    easeInSine,
    easeOutCirc,
    easeOutCubic,
    easeOutExpo,
    easeOutQuad,
    easeOutQuart,
    easeOutQuint,
    easeOutSine,
    linearTween
});
