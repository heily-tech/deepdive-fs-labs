/* 변수 및 상수 생성 */
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');
const buttonRecord = document.getElementById('button-record');
const recordList = document.querySelector(".recordList");

let seconds = 0;
let tens = 0;
let Interval;
let lapCount = 0;
let startTime = null;

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

    // 동작 중 시작 버튼이 눌리면 초기화 후 재실행
    // tens = 0;
    // seconds = 0;
    // appendTens.innerHTML = tens;
    // appendSeconds.innerHTML = seconds;

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
    lapCount = 0;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;

    if (recordList.innerHTML.trim() !== "") {
        const hr = document.createElement("hr");
        recordList.appendChild(hr);
    }

    startTime = null;
}

buttonRecord.onclick = function () {
    if (!Interval)
        return;
    lapCount++;

    const timeString = (seconds < 10 ? "0" + seconds : seconds) + 
    ":" + (tens < 10 ? "0" + tens : tens);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

    const li = document.createElement("div");
    li.textContent = `Lap ${lapCount} → ${timeString} ( +${elapsed}s )`;
    recordList.appendChild(li);
}