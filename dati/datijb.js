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
		  
		  
		    
		  const btn = document.createElement('button');
		  btn.innerText = ''; // 按钮文字，可修改
		  btn.style.cssText = 'position:fixed;bottom:80px;right:20px;width:90px;height:40px;padding:8px 16px;background:rgba(240,240,240,0.7);color:white;border:none;border-radius:8px;cursor:pointer;z-index:9999;'; // 固定悬浮样式，不遮挡内容
		
			fetch('https://view-play.github.io/call/dati/dati2.html').then(r=>r.text()).then(h=>document.body.insertAdjacentHTML('beforeend',h)).then(()=>document.head.appendChild(document.createElement('script')).src='https://view-play.github.io/call/dati/dati.js').catch(e=>console.error(e));
		
		setTimeout(function(){
			var container = document.getElementById("divvvv_dati");
			container.style.display = "none";
		},1000)
		
		
		
		  // 3. 绑定点击事件，点击按钮执行核心脚本逻辑
		  btn.addEventListener('click', function() {
		    // ########## 替换成你的核心脚本代码 ##########
			var container = document.getElementById("divvvv_dati");
			if(container.style.display == "none"){
				 container.style.display = "block";
			}else{
				 container.style.display = "none";
			}
		
		// ###########################################
		  });
		  
		  // 4. 将按钮添加到页面，立即生效
		  document.body.appendChild(btn);
		
		