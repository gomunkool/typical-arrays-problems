function min(num) {
    let resMin = num[0];

    for (let i = 1; i < num.length; i++) {
        if (resMin > num[i]) {
            resMin = num[i];
        }
    }
    return resMin;
}

console.log(
    min([
        2,
        -24,
        13,
        -11,
        16,
        -12,
        -16,
        24,
        13,
        -38,
        19,
        -16,
        19,
        3,
        2,
        32,
        0,
        -10,
        -19,
        -27,
    ])
);
