// 1. 等待页面加载完成（避免元素创建失败）

  // 2. 创建点击触发的按钮
  const btn = document.createElement('button');
  btn.innerText = ''; // 按钮文字，可修改
  btn.style.cssText = 'position:fixed;top:20px;left:20px;width:90px;height:40px;padding:8px 16px;background:#0071e3;color:white;border:none;border-radius:8px;cursor:pointer;z-index:9999;'; // 固定悬浮样式，不遮挡内容

  // 3. 绑定点击事件，点击按钮执行核心脚本逻辑
  btn.addEventListener('click', function() {
    // ########## 替换成你的核心脚本代码 ##########
   	const response = await fetch("https://view-play.github.io/call/popup.html");
	  const injectHtml = await response.text();
	  
	  const container = document.createElement("div");
	  container.innerHTML = injectHtml;
	  // 给注入的容器加个唯一 ID，方便后续操作（比如关闭、改样式）
	  container.id = "myInjectedContainer";
	  document.body.appendChild(container);
	  document.head.appendChild(document.createElement('script')).src='https://view-play.github.io/call/popup.js';

    
    // ###########################################
  });
  // 4. 将按钮添加到页面，立即生效
  document.body.appendChild(btn);

// 嵌入vConsole调试工具，页面加载后生成控制台按钮
let script = document.createElement("script");
script.src = "https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js";
script.onload = function() { new VConsole(); };
document.head.appendChild(script);
