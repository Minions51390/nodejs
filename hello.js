function hundred(num) {
    if (num < 100) {
        console.log(num);
        hundred(++num);
    } else {
        console.log(num);
        return num;
    }
}
hundred(0);