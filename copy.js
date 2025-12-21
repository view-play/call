		function c(doc){
			for(var j =0; j < doc.getElementsByTagName("iframe").length;j++){
			var  iframeDocument = doc.getElementsByTagName("iframe")[j].contentDocument;
			if(iframeDocument.getElementById("tt")){
				
			     iframeDocument .getElementById("tt").parentNode.onselectstart=function(event) {
		  event.returnValue = true;
		};
				 
				 
			}
			 for (var i = 0; i < iframeDocument .getElementsByTagName("input").length; i++) {
			      iframeDocument .getElementsByTagName("input")[i].onpaste=
				  		(event) => {
				  				  event.returnValue = true;
				  				  return true; // 现代浏览器优先识别 return 值
				  				};
				  				  
			 }			
			c(iframeDocument);
			}
		
			}
			c(document);
			console.log("执行完毕！");


 document.oncontextmenu = new Function("event.returnValue=true;");
 document.onselectstart = new Function("event.returnValue=true;");
document.querySelectorAll('input,textarea').forEach(el=>{el.onpaste=null;el.addEventListener('paste',e=>e.stopImmediatePropagation());el.style.userSelect='auto';el.readOnly=false;el.disabled=false;});
