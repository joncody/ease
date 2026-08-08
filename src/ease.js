function is_number(val) {
    return typeof val === "number" && Number.isNaN(val) === false;
}

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

function easeInCirc(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (-change * (Math.sqrt(1 - (n * n)) - 1)) + begin;
}

function easeInCubic(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (change * n * n * n) + begin;
}

function easeInExpo(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    if (time === 0) {
        return begin;
    }
    return (change * Math.pow(2, 10 * ((time / duration) - 1))) + begin;
}

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

function easeInOutSine(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    return (-change / 2 * (Math.cos((Math.PI * time) / duration) - 1)) + begin;
}

function easeInQuad(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (change * n * n) + begin;
}

function easeInQuart(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (change * n * n * n * n) + begin;
}

function easeInQuint(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (change * n * n * n * n * n) + begin;
}

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

function easeOutCirc(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = (time / duration) - 1;
    return (change * Math.sqrt(1 - (n * n))) + begin;
}

function easeOutCubic(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = (time / duration) - 1;
    return (change * ((n * n * n) + 1)) + begin;
}

function easeOutExpo(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    if (time === duration) {
        return begin + change;
    }
    return (change * (-Math.pow(2, (-10 * time) / duration) + 1)) + begin;
}

function easeOutQuad(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = time / duration;
    return (-change * n * (n - 2)) + begin;
}

function easeOutQuart(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = (time / duration) - 1;
    return (-change * ((n * n * n * n) - 1)) + begin;
}

function easeOutQuint(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    const n = (time / duration) - 1;
    return (change * ((n * n * n * n * n) + 1)) + begin;
}

function easeOutSine(time, begin, change, duration) {
    if (check_args(time, begin, change, duration) === false) {
        return begin;
    }
    return (change * Math.sin((time / duration) * (Math.PI / 2))) + begin;
}

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
