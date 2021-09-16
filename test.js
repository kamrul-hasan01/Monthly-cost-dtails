function set() {
    console.log(6)
}
let second = 0;
setTimeout(set, 5000)

const timeId = setInterval(() => {
    second++;
    console.log(second);
    if (second > 15) {
        clearInterval(timeId);
    }
}, 1000)