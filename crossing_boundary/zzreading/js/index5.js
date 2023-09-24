// 等待页面代码
// 等待页面代码
// 等待页面代码

function enterMinPage() {
    if (document.readyState == "complete") {
        setTimeout(function () {
            // 隐藏等待页面
            $('#loadingOverlay').fadeOut(500);

            // 显示主要内容
            $('#content').fadeIn(1000);
        }, 100);


    }
    else {
        setTimeout(enterMinPage, 500);

    };

};


audio.addEventListener("canplaythrough", enterMinPage)







    ;






// 旋转代码
const loader = document.querySelector('.loader');

let rotation = 0;
setInterval(() => {
    rotation += 2;
    loader.style.transform = `rotate(${rotation}deg)`;
}, 2);

// 旋转样式



//正文
//正文
//正文
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
};

// 将数字转换为两位数的字符串
function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }

};



// 音乐播放
// 音乐播放
// 音乐播放
// 音乐播放
// 音乐播放
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

};




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

    answerID.textContent = answers.join(", ") + "\n " + currentTimer;

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

};

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
    let paragraph = document.getElementById("myParagraph");
    paragraph.style.display = "flex";
    let noticeID = document.getElementById("notice");
    noticeID.style.display = "none";



};


//重新加载 退回/取消  弹窗显示
function reloadConfirmation() {
    let modal = document.getElementById("confirmation-reload");
    modal.style.display = "flex";
};
function backConfirmation() {
    var modal = document.getElementById("confirmationBackWindow");
    modal.style.display = "flex";
};

function hideConfirmation() {
    let modal1 = document.getElementById("confirmation-reload");
    modal1.style.display = "none";

    let modal2 = document.getElementById("confirmationBackWindow");
    modal2.style.display = "none";

    let modal3 = document.getElementById("confirmationSubmitWindow");
    modal3.style.display = "none";
};

//setting 设置页面


// 打开对话框  关闭对话框
var settingPageID = document.getElementById("settingPage");

function openSettingPage() {
    settingPageID.style.display = "flex";
};

function closeSettingPage() {
    settingPageID.style.display = "none";
};



// 更新字体大小(notice+文章)
var myParagraphID = document.getElementById("myParagraph");
var noticeID = document.getElementById("notice");

var fontSizee
function updateFontSize(value) {
    myParagraphID.style.fontSize = value + "px";
    noticeID.style.fontSize = value + "px";
    // 更新字体大小范围滑动条的数值显示
    document.getElementById("FontValue").textContent = value;
    var scrollHeight = scrollingBox.scrollHeight;
    var step = scrollHeight / (timing / a);
    var endPoint = scrollHeight - scrollingBox.clientHeight;
};

// 还原字体大小,时间长短
var paragraphFontSize = document.getElementById("paragraphFontNum");

var scrollingCheckbox = document.getElementById('scrollingCheck');
var resetBtn = document.getElementById('resetBtn');

function resetValue() {
    paragraphFontSize.value = 18;
    updateFontSize(18);
    inputElement999.value = 900;
    scrollingInput.style.display = "inline";
    updateTime(900);
    scrollingCheckbox.checked = true;
    inputElement999.disabled = false;
    inputElement999.style.backgroundColor = "white";
};



function updateTime(value) {
    timing = value * 2000;

}





//scrolling check

var timing = 900000;

var scrollingInput = document.getElementById('scrollingInput');
var inputElement999 = document.getElementById("estimatedTime");






//滚动函数
function scrollToBottom() {

    controlBtn.removeEventListener("click", scrollToBottom);

    if (scrollingCheckbox.checked) {

        //以下为参数，a为刷新毫秒时间 b为检查时间
        var a = 16;
        var b = 700;
        //以下为命名
        const scrollingBox = document.getElementById('mainParagraph');
        var scrollHeight = scrollingBox.scrollHeight;
        var step = scrollHeight / (timing / a);
        var startPoint = 0;
        var moveBeginPoint = 0;
        var currentPoint = 0;
        var endPoint = scrollHeight - scrollingBox.clientHeight;
        var isScrolling = false;
        var isPaused = false;
        var startTime = null;
        var fontRecord;

        function checkForMovement() {
            currentPoint = scrollingBox.scrollTop;

            if (Math.abs(currentPoint - startPoint) > step * 5) {
                isScrolling = false;
                isPaused = true;
                pauseForMovement();
            }

            startPoint = currentPoint;

        }

        function pauseForMovement() {
            startTime = Date.now();
            startPoint = scrollingBox.scrollTop;
            setTimeout(() => {
                currentPoint = scrollingBox.scrollTop;
                if (Math.abs(currentPoint - startPoint) > 5 * step) {
                    pauseForMovement();
                } else {
                    isPaused = false;
                    isScrolling = true;
                    startTime = Date.now();
                    moveBeginPoint = currentPoint;

                    scrolling();
                }
            }, b);
        }

        function scrolling() {

            //检查是否勾选了滚动


            //赋予起始时间
            if (!startTime) {
                startTime = Date.now();
            }
            if (!scrollingCheckbox.checked) {
                setTimeout(pauseForMovement, b);
            }


            else {
                //检查是否触底
                if (scrollingBox.scrollTop >= endPoint) {
                    scrollingBox.scrollTo(0, scrollHeight);
                    isScrolling = false;
                    isPaused = true;
                    checkAtBottom();
                }


                checkForMovement();


                scrollingBox.scrollTo(0, (Date.now() - startTime) * (step / a) + moveBeginPoint);
                fontRecord = fontSizee;

                setTimeout(scrolling, a);
            }
        }


        //检查是否在底部，暂停滚动
        function checkAtBottom() {
            if (scrollingBox.scrollTop >= endPoint) {
                setTimeout(() => {
                    checkAtBottom();
                }, b);
            }
            else {
                isScrolling = true;
                isPaused = false;
                scrolling();


            }

        }


        isScrolling = true;
        scrolling();
    }








}


// 绑定按钮事件
controlBtn.addEventListener("click", toggleTimer);
controlBtn.addEventListener("click", togglePlay);
resetBtn.addEventListener("click", resetValue);

var isStart = false;

scrollingCheckbox.addEventListener('change', () => {
    if (scrollingCheckbox.checked) {
        paragraphFontNum.disabled = true;


        if (!isStart) {
            inputElement999.disabled = false;
            inputElement999.style.backgroundColor = "white";
        }
        paragraphFontSize.value = 18;
        updateFontSize(18);
    }



    if (!scrollingCheckbox.checked) {
        inputElement999.disabled = true;
        inputElement999.style.backgroundColor = "lightgray";
        if (!isStart) {
            paragraphFontNum.disabled = false;
        }

    }
});



controlBtn.addEventListener("click", scrollToBottom);

//禁用阅读时间输入框
controlBtn.addEventListener("click", function () {
    isStart = true;
    // 禁用输入框
    inputElement999.disabled = true;
    // 设置输入框的样式为灰色
    inputElement999.style.backgroundColor = "lightgray";

    if (!scrollingCheckbox.checked) {
        scrollingCheckbox.disabled = true;
        scrollingCheckbox.style.backgroundColor = "lightgray";


    }

    else {
        paragraphFontNum.disabled = true;
        // 设置输入框的样式为灰色
        paragraphFontNum.style.backgroundColor = "lightgray";
    }



    resetBtn.style.display = 'none';





    controlBtn.removeEventListener("click", toggleTimer);

});
var currentTimer
function showQuestion() {
    var quizDiv = document.getElementById("quizDiv");
    var showButton = document.getElementById("showButton");

    quizDiv.style.display = "block";
    showButton.style.display = "none";
    currentTimer = document.getElementById("timer").innerHTML
}



