exports.min = function min(array) {
    if (array && array.length > 0) {
        let resMin = array[0];

        for (let i = 1; i < array.length; i++) {
            if (resMin > array[i]) {
                resMin = array[i];
            }
        }
        return resMin;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array && array.length > 0) {
        let resMax = array[0];

        for (let i = 1; i < array.length; i++) {
            if (resMax < array[i]) {
                resMax = array[i];
            }
        }
        return resMax;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array && array.length > 0) {
        let length = array.length;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum / length;
    } else {
        return 0;
    }
};
