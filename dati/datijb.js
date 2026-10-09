		  const btn = document.createElement('button');
		  btn.innerText = ''; // 按钮文字，可修改
		  btn.style.cssText = 'position:fixed;bottom:20px;right:20px;width:90px;height:40px;padding:8px 16px;background:rgba(240,240,240,0.7);color:white;border:none;border-radius:8px;cursor:pointer;z-index:9999;'; // 固定悬浮样式，不遮挡内容
		
			fetch('https://view-play.github.io/call/dati/dati2.html').then(r=>r.text()).then(h=>document.body.insertAdjacentHTML('beforeend',h)).then(()=>document.head.appendChild(document.createElement('script')).src='https://view-play.github.io/call/dati/dati.js').catch(e=>console.error(e));
		
		setTimeout(function(){
			var container = document.getElementById("divvvv");
			container.style.display = "none";
		},1000)
		
		
		
		  // 3. 绑定点击事件，点击按钮执行核心脚本逻辑
		  btn.addEventListener('click', function() {
		    // ########## 替换成你的核心脚本代码 ##########
			var container = document.getElementById("divvvv");
			if(container.style.display == "none"){
				 container.style.display = "block";
			}else{
				 container.style.display = "none";
			}
		
		// ###########################################
		  });
		  
		  // 4. 将按钮添加到页面，立即生效
		  document.body.appendChild(btn);
		
		