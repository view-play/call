
	

	var danxuanTikus= JSON.parse(localStorage.getItem("danxuanTitles"));
	var duoxuanTikus= JSON.parse(localStorage.getItem("duoxuanTitles"));
	var panduanTikus= JSON.parse(localStorage.getItem("panduanTitles"));
	var danxuanAnswer= JSON.parse(localStorage.getItem("danxuanAnswer"));
	var duoxuanAnswer= JSON.parse(localStorage.getItem("duoxuanAnswer"));
	var panduanAnswer= JSON.parse(localStorage.getItem("panduanAnswer"));
	console.log("单选题数量：" +danxuanTikus.length);
	console.log("多选题数量：" +duoxuanTikus.length);
	console.log("判断题数量：" +panduanTikus.length);
	console.log("单选题答案数量：" +danxuanAnswer.length);
	console.log("多选题答案数量：" +duoxuanAnswer.length);
	console.log("判断题答案数量：" +panduanAnswer.length);
	
	
	

	function getText(){
		var current = document.getElementById("start").value;
		// var current = 1;
		var title = document.getElementsByClassName("field-label")[current].getElementsByClassName("topichtml")[0].innerText;
		var text ="问题："+ title +";";
		console.log(text);
		return text;
	}
	function xianti(){
		document.getElementById("answer").innerText = getText(); 
	}
	
	function xiati(){
		  document.getElementById("start").value = document.getElementById("start").value*1 + 1;
		  dati();
	} 
	function shangti(){
		 document.getElementById("start").value = document.getElementById("start").value*1 - 1;
		 dati();
	}	
	
	function dati(current){
		//var current = document.getElementById("start").value;
		var doc = document.getElementsByClassName("ui-field-contain")[current];
		var title = document.getElementsByClassName("field-label")[current].getElementsByClassName("topichtml")[0].innerText;
		var answer = "未搜到";
		if(current < 81){
			if(danxuanTikus.indexOf(title) != -1){ 
				yida++;
				answer = danxuanAnswer[danxuanTikus.indexOf(title)];
				for(var i = 0;i<doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio").length;i++){
					if(answer == doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio")[i].innerText){
						
						doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio")[i].click();
					}
				}
				
			}
		
		}else if(current < 121){
			if(duoxuanTikus.indexOf(title) != -1){
				yida++;
				answer = duoxuanAnswer[duoxuanTikus.indexOf(title)];
				for(var i = 0;i<doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-checkbox").length;i++){
					if(answer.indexOf(doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-checkbox")[i].innerText)!= -1){
						doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-checkbox")[i].click();
					}
				}
			}
			
		}else  {
			if(panduanTikus.indexOf(title) != -1){
				yida++;
				answer = panduanAnswer[panduanTikus.indexOf(title)];
				for(var i = 0;i<doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio").length;i++){
					if(answer == doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio")[i].innerText){
						doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio")[i].click();
					}
				}
				
			}
		}
		
	}
	
	var yida = 0;
	function allda(){
		yida = 0;
		for(var i = 1; i<161;i++){
			dati(i);
		}
		console.log("已答："+yida+"题");
	}
	
	setTimeout(allda,5000);
	 