
// 获取元素
var textID = document.getElementById("text");
var settingID = document.getElementById("setting");
var sliderID = document.getElementById("slider");

// 打开对话框
function openDialog() {
    settingID.style.display = "flex";
}

// 关闭对话框
function closeDialog() {
    settingID.style.display = "none";
}

// 更新字体大小
function updateFontSize(value) {
    textID.style.fontSize = value + "px";
}

// 还原字体大小
function resetFontSize() {
    sliderID.value = 20;
    updateFontSize(20);
}