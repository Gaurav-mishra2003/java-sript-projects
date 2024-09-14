let inputbutton = document.querySelector('.watch');
let date;
let hours;
let minutes;
let time;
let id;
function start() {
    id = setInterval(() => {
        date = new Date();
        hours = date.getHours();
        minutes = date.getMinutes();
        second = date.getSeconds();
        if (hours < 12) {
            let time = hours + ': ' + minutes + ' :  ' + second + 'AM';
        }
        else {
            time = hours + ':  ' + minutes + ' :  ' + second + ' PM';
        }
        inputbutton.value = time;
    }, 1000);
}
function pause() {
    clearInterval(id);
}
function reset() {
    time = ' 00 : 00 : 00 ';
    inputbutton.value = time;
    clearInterval(id);
}