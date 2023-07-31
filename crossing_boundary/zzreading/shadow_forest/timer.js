


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
    }
    controlBtn.removeEventListener("click", toggleTimer);
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
var audio = new Audio("../music/FG.mp3"); // 音乐文件路径
var isPlaying = false;


//播完继续循环播放
audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
});

function togglePlay() {
    if (isPlaying) {
        function submitConfirmation() {
            var csW = document.getElementById("confirmationSubmitWindow");
            csW.style.display = "flex";
        }
        submitConfirmation();
    }

    else {
        audio.play();
        showText();
        controlBtn.innerHTML = "Submit";
        isPlaying = true;

    }

}




//选择题总结答案，feedback弹窗
function submitQuiz() {

    // 获取答案
    var answers = [];
    var form = document.getElementById("quiz-form");
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
    var answerID = document.getElementById("answer");

    answerID.textContent = answers.join(", ");

};


// 复制整页
function copyPage() {
    html2canvas(document.body).then(function (canvas) {
        canvas.toBlob(function (blob) {
            navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]).then(function () {
                alert('Screenshot copied!');
            });
        }, 'image/png');
    });




};



//复制选项，是否暂停音乐
var pausemusicbtnID = document.getElementById("musicPauseBtn");
var playing2 = true;
function ifPausemusic() {
    if (playing2) {
        audio.pause();
        pausemusicbtnID.innerHTML = "Resume";

    }

    else {
        audio.play();

        pausemusicbtnID.innerHTML = "Pause";

    }
    playing2 = !playing2;

}

//隐藏试题,关闭计时器按钮，关闭提交确认框,feedback框显示
function hideText() {
    var paragraphID = document.getElementById("myParagraph");
    paragraphID.style.display = "none";

    var controlBtnID = document.getElementById("control-btn");
    controlBtnID.style.display = "none";

    var confirmationSubmitID = document.getElementById("confirmationSubmitWindow");
    confirmationSubmitID.style.display = "none";

    var feedbackID = document.getElementById("feedback");
    feedbackID.style.display = "flex";


};

//显示文字,隐藏notice
function showText() {
    var paragraph = document.getElementById("myParagraph");
    paragraph.style.display = "flex";
    var paragraphb = document.getElementById("notice");
    paragraphb.style.display = "none";



};


//重新加载 退回/取消  弹窗显示
function reloadConfirmation() {
    var modal = document.getElementById("confirmation-reload");
    modal.style.display = "flex";
}
function backConfirmation() {
    var modal = document.getElementById("confirmationBackWindow");
    modal.style.display = "flex";
}

function hideConfirmation() {
    var modal1 = document.getElementById("confirmation-reload");
    modal1.style.display = "none";

    var modal2 = document.getElementById("confirmationBackWindow");
    modal2.style.display = "none";

    var modal3 = document.getElementById("confirmationSubmitWindow");
    modal3.style.display = "none";
}



// 绑定按钮事件
controlBtn.addEventListener("click", toggleTimer);
controlBtn.addEventListener("click", togglePlay);
