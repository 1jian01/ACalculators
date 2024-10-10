function addstr(s) {
    //获取值
    var sz = document.getElementById("sz");
    //sz现在的值=原来的值+s
    sz.value = sz.value + s;
}

//运算
function calc() {
    var sz = document.getElementById("sz");
    //把文本框内的值用eval赋值计算给val
    val = eval(sz.value);
    //重新赋值sz
    sz.value = val;
}
//清除
function clr() {
    var sz = document.getElementById("sz");
    //设置空字符
    sz.value = '';

}

//删除最后一个值
function sel() {
    var sz = document.getElementById("sz");
    //提取字符substr()
    var str = sz.value.substr(0,sz.value.length-1);
    sz.value = str
}