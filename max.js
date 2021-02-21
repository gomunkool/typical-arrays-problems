function max(num) {
    let resMax = num[0];

    for (let i = 1; i < num.length; i++) {
        if (resMax < num[i]) {
            resMax = num[i];
        }
    }
    return resMax;
}

console.log(
    max([
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
