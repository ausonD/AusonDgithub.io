


// 获取显示计时器的元素和按钮元素
var timerEl = document.getElementById("timer");
var controlBtn = document.getElementById("control-btn");

// 定义初始时间和计时器ID
var time = 0;
var timer;
var isRunning = false;

// 开始或暂停计时
function toggleTimer() {
    if (isRunning) {
        // 暂停计时
        clearInterval(timer);
        isRunning = false;
        controlBtn.innerHTML = "Begin";
    } else {
        // 开始计时
        timer = setInterval(function () {
            // 增加一秒钟
            time++;

            // 将时间转换成小时，分钟和秒钟
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor((time - hours * 3600) / 60);
            var seconds = time % 60;

            // 格式化时间，并将其显示在HTML元素中
            timerEl.innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
        }, 1000);

        isRunning = true;
        controlBtn.innerHTML = "Submit";
    }
}

// 将数字转换为两位数的字符串
function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}




// 音乐播放
// 音乐播放
// 音乐播放
// 音乐播放
// 音乐播放
var audio = new Audio("FG.mp3"); // 音乐文件路径
var isPlaying = false;

audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
});

function togglePlay() {
    if (isPlaying) {

        //提交函数
        submitQuiz();
        //隐藏内容
        hideText();
    }

    else {
        audio.play();
        showText();
    }
    isPlaying = !isPlaying;
}




//选择题+弹窗,放在音乐播放中
//选择题+弹窗,放在音乐播放中
//选择题+弹窗,放在音乐播放中
function submitQuiz() {
    var answers = [];
    var form = document.getElementById("quiz-form");
    var popup = document.createElement("div");
    popup.id = "popup";
    popup.style.position = 'absolute';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.border = '3px solid gray';


    // 获取答案
    for (var i = 1; i <= 5; i++) {
        var radios = form.elements["q" + i];
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                answers.push(radios[j].value);
                break;
            }
        }
    }

    // 显示答案
    var answerText = document.createElement("p");
    answerText.innerHTML = "Thank you for your participation! <BR>Please make sure to answer every question.<br>Click the 'Copy' button below and send the copied content to your tester.<br>Click 'stop' to pause the music if you want.<br><br>Your answer is:<br>" + answers.join(", ");
    popup.appendChild(answerText);

    // 复制选项
    var copyBtn = document.createElement("button");
    copyBtn.innerHTML = "Copy";
    copyBtn.style.width = "50px"

    copyBtn.onclick = function () {
        html2canvas(document.body).then(function (canvas) {
            canvas.toBlob(function (blob) {
                navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]).then(function () {
                    alert('Screenshot copied!');
                });
            }, 'image/png');
        });
    };
    //暂停音乐
    var pausemusicbtn =
        document.createElement("button");
    pausemusicbtn.style.width = "50px"
    pausemusicbtn.innerHTML = "Stop";
    pausemusicbtn.onclick = function () {
        audio.pause();
        pausemusicbtn.style.display = "none";

    }

    popup.appendChild(copyBtn);
    popup.appendChild(pausemusicbtn);


    // 显示弹窗
    document.body.appendChild(popup);
}

//隐藏文字,关闭计时器按钮
function hideText() {
    var pTag = document.getElementById("myParagraph");
    pTag.style.display = "none";

    var pTaga = document.getElementById("control-btn");
    pTaga.style.display = "none";



}

//显示文字,隐藏notice
function showText() {
    var pTag = document.getElementById("myParagraph");
    pTag.style.display = "flex";
    var pTagb = document.getElementById("notice");
    pTagb.style.display = "none";



}



// 绑定按钮事件
controlBtn.addEventListener("click", toggleTimer);
controlBtn.addEventListener("click", togglePlay);