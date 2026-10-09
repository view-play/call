setInterval(a,500)
function a(){
    // 隐藏遮罩1
    let el1 = document.getElementById("layui-layer-shade1");
    if(el1) el1.style.display="none";
    let el2 = document.getElementById("layui-layer1");
    if(el2) el2.style.display="none";

    // 清除模糊、禁用状态
    let divContent = document.getElementById("divContent");
    if(divContent){
        divContent.classList.remove("isblur");
        divContent.classList.remove("disabled");
    }

    // 阻止页面可见性检测，屏蔽切屏监听
    document.addEventListener('visibilitychange',e=>e.stopImmediatePropagation(),true);
    // 重置切屏计数变量（前端页面计数器）
    if(window.wjxExamInfo){
        window.wjxExamInfo.switchCount=0;
        window.wjxExamInfo.maxSwitchCount=999;
    }

    // 隐藏遮罩2
    let el3 = document.getElementById("layui-layer-shade2");
    if(el3) el3.style.display="none";
    let el4 = document.getElementById("layui-layer2");
    if(el4) el4.style.display="none";
}