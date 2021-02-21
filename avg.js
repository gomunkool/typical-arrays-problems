function avg(num) {
    if (num && num.length > 0) {
        let length = num.length;
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum = sum + num[i];
        }
        return sum / length;
    } else {
        return 0;
    }
}

console.log(avg([]));
