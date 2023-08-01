//遮盖层加载
// 等待页面代码
const loadingOverlay = document.getElementById('loadingOverlay');
// 主网页内容
const content = document.getElementById('content');
// 监听页面加载完成事件
window.addEventListener('load', function () {
    // 隐藏等待页面，显示主网页内容
    loadingOverlay.style.display = 'none';
    content.style.display = 'block';
});




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

function updateFontSize(value) {
    myParagraphID.style.fontSize = value + "px";
    noticeID.style.fontSize = value + "px";
    // 更新字体大小范围滑动条的数值显示
    document.getElementById("FontValue").textContent = value;
};

// 还原字体大小,时间长短
var paragraphFontSize = document.getElementById("paragraphFontNum");
var readingspeed999 = document.getElementById("estimatedTime");
function resetValue() {
    paragraphFontSize.value = 18;
    updateFontSize(18);
    readingspeed999.value = 900;
    updateTime(900);
};



function updateTime(value) {
    timing = value * 2000;
    document.getElementById("timeValue").textContent = value;
}





//scrolling check

var timing = 900000;

var scrollingInput = document.getElementById('scrollingInput');
var scrollingCheckbox = document.getElementById('scrollingCheck');
var inputElement999 = document.getElementById("estimatedTime");
var isScrolling = true;
var resetBtn = document.getElementById('resetBtn');






//滚动函数
function scrollToBottom() {
    if (scrollingCheckbox.checked) {
        const scrollingBox = document.getElementById('mainParagraph');
        const scrollHeight = scrollingBox.scrollHeight; // 获取div的滚动高度
        let startTime = null;
        function scroll(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }
            let timeElapsed = timestamp - startTime;
            let progress = Math.min(timeElapsed / timing, 1); // n秒钟*1000内完成滚动
            scrollingBox.scrollTo(0, progress * scrollHeight); // 平滑滚动到底部

            if (progress < 1) {
                window.requestAnimationFrame(scroll);
                // 继续调用自身实现动画效果
                // 增加额外的刷新次数

            }
        }

        function startScrolling() {
            window.requestAnimationFrame(scroll);
        }

        setTimeout(startScrolling, 0); // 延迟10秒钟开始滚动
        controlBtn.removeEventListener("click", scrollToBottom);

    }
};



// 绑定按钮事件
controlBtn.addEventListener("click", toggleTimer);
controlBtn.addEventListener("click", togglePlay);
var resetBtn = document.getElementById('resetBtn');


scrollingCheckbox.addEventListener('change', () => {
    if (scrollingCheckbox.checked) {
        isScrolling = true;
        scrollingInput.style.display = 'block';


    } else {
        isScrolling = false;
        scrollingInput.style.display = 'none';
    }
});


controlBtn.addEventListener("click", scrollToBottom);

//禁用阅读时间输入框
controlBtn.addEventListener("click", function () {
    // 禁用输入框
    inputElement999.disabled = true;
    // 设置输入框的样式为灰色
    inputElement999.style.backgroundColor = "lightgray";


    scrollingCheckbox.disabled = true;
    scrollingCheckbox.style.backgroundColor = "lightgray";


    paragraphFontSize.disabled = true;
    paragraphFontSize.style.backgroundColor = "lightgray";


    resetBtn.style.display = 'none';





    controlBtn.removeEventListener("click", toggleTimer);

});







