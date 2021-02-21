function avg(num) {
    let length = num.length;
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum / length;
}

console.log(
    avg([
        21,
        38,
        -25,
        39,
        38,
        18,
        -12,
        38,
        -33,
        25,
        -12,
        -7,
        19,
        12,
        26,
        26,
        -28,
        21,
        -25,
        29,
    ])
);
