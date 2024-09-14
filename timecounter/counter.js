let result = document.querySelector('.watch');
result.value='00 : 00 : 00';
let second = 0;
let answer;
let minutes = 0;
let hours = 0;
let id;
function start() {
    id = setInterval(
        () => {
            if (second > 58) {
                minutes++;
                second = 0;
                answer = hours + ' :  ' + minutes + ' : ' + second;
            }
            else if (minutes > 59) {
                hours++;
            }
            else {
                second++;
                answer = hours + ' :  ' + minutes + ' : ' + second;
            }
            result.value = answer;
        }
        , 1000)

}
function stop() {
    clearInterval(id);
}
function reset() {
    minutes = 0;
    hours = 0;
    second = 0;
    answer = hours + ' :  ' + minutes + ' : ' + second;
    result.value = answer;
    clearInterval(id);
}