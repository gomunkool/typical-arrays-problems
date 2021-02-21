function min(num) {
    if (num) {
        let resMin = num[0];

        for (let i = 1; i < num.length; i++) {
            if (resMin > num[i]) {
                resMin = num[i];
            }
        }
        return resMin;
    } else {
        return 0;
    }
}

console.log(min());
