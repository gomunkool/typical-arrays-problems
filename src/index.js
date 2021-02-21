exports.min = function min(array) {
    let resMin = num[0];

    for (let i = 1; i < num.length; i++) {
        if (resMin > num[i]) {
            resMin = num[i];
        }
    }
    return resMin;
};

exports.max = function max(array) {
    let resMax = num[0];

    for (let i = 1; i < num.length; i++) {
        if (resMax < num[i]) {
            resMax = num[i];
        }
    }
    return resMax;
};

exports.avg = function avg(array) {
    let length = num.length;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum / length;
};
