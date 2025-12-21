
		function c(doc){
			for(var j =0; j < doc.getElementsByTagName("iframe").length;j++){
			var  iframeDocument = doc.getElementsByTagName("iframe")[j].contentDocument;
			if(iframeDocument.getElementById("tt")){
				
			     iframeDocument .getElementById("tt").parentNode.onselectstart=function(event) {
		  event.returnValue = false
		};
				 
				 
			}
			 for (var i = 0; i < iframeDocument .getElementsByTagName("input").length; i++) {
			      iframeDocument .getElementsByTagName("input")[i].onpaste=
				  		(event) => {
				  				  event.returnValue = false
				  				  return false;// 现代浏览器优先识别 return 值
				  				};
				  
				  
				  
			 }			
			c(iframeDocument);
			}
		
			}
			c(document);
			console.log("执行完毕！");



// 替换 new Function() 为原生事件阻止/放行逻辑
document.oncontextmenu = function(e) {
  e.returnValue = false; // 禁用右键（若要放行则改为 true）
};
document.onselectstart = function(e) {
  e.returnValue = false; // 禁用文本选择（若要放行则改为 true）
};
// 禁用输入框粘贴+选择（若要恢复则反向修改）
document.querySelectorAll('input,textarea').forEach(el=>{
  el.onpaste = e => e.preventDefault();
  el.style.userSelect = 'none';
  el.style.webkitUserSelect = 'none';
});
