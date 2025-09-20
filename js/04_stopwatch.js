/* 변수 및 상수 생성 */
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');

let seconds = 0;
let tens = 0;
let Interval;

/* 타이머 시작을 위한 함수 */
function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = seconds;
        tens = 0;
        appendTens.innerHTML = 0;
    }
}

/* 시작 버튼 이벤트 */
buttonStart.onclick = function () {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    
    Interval = setInterval(startTimer, 10); // 10ms 간격 실행
}

/* 타이머 정지 */
buttonStop.onclick = function () {
    clearInterval(Interval);
}

/* 타이머 초기화 */
buttonReset.onclick = function () {
    clearInterval(Interval);

    tens = 0;
    seconds = 0;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}