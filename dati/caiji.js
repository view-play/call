




function caiji(ku){
	
	
	// 获取，没有就返回[]
	function getStorageArr(key) {
	  const val = localStorage.getItem(key);
	  return val ? JSON.parse(val) : [];
	}
	
	// 设置数组到本地存储
	function setStorageArr(key, arr) {
	  localStorage.setItem(key, JSON.stringify(arr));
	}
	
	var danxuanTitles = getStorageArr("danxuanTitles");
	var duoxuanTitles = getStorageArr("duoxuanTitles");
	var panduanTitles = getStorageArr("panduanTitles");
	var danxuanAnswer= getStorageArr("danxuanAnswer");
	var duoxuanAnswer= getStorageArr("duoxuanAnswer");
	var panduanAnswer= getStorageArr("panduanAnswer");
	
	//获取单选题
	for(var i = 1;i< 81;i++){
		var doc = document.getElementsByClassName("ui-field-contain")[i];
		doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio")[0].click();
		doc.getElementsByClassName("sumitbutton")[0].click();
		var title = doc.getElementsByClassName("topichtml")[0].innerText;
		const reg = /正确答案为：(.+)/;
		var str = doc.innerText;
		var answer 
		if(str.indexOf("回答错误，正确答案为")!= -1){
			var matchRes = str.match(reg);
			answer = matchRes ? matchRes[1] : '';
		}else{
			answer = doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio")[0].innerText;
		}
		if(danxuanTitles.indexOf(title)== -1){
			danxuanTitles.push(title);
			danxuanAnswer.push(answer);
		}
	}
	setStorageArr("danxuanTitles", danxuanTitles);
	setStorageArr("danxuanAnswer", danxuanAnswer);
	
	
	
	//获取多选题
	var duoStart = 343;
	var panStart = 559;
	if(ku == "A"){
		
	}else if(ku == "B"){
		duoStart = 341;
		panStart = 557;
	}else if(ku == "C"){
		duoStart = 342;
		panStart = 558;
	}else if(ku == "D"){
		duoStart = 344;
		panStart=561;
	}
	for(var i = 81;i< 121;i++){
		//document.getElementsByName("field-label")[i].getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-checkbox")[0].click();
		//doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-checkbox")[0].click();
		var doc = document.getElementsByClassName("ui-field-contain")[i];
		doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-checkbox")[0].click();
		var title = doc.getElementsByClassName("topichtml")[0].innerText;
		doc.getElementsByClassName("sumitbutton")[0].click();
		
		const reg = /正确答案为：(.+)/;
		var str = doc.innerText;
		var answer 
		if(str.indexOf("回答错误，正确答案为")!= -1){
			var matchRes = str.match(reg);
			answer = matchRes ? matchRes[1] : '';
		}else{
			answer = doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-checkbox")[0].innerText;
		}
		if(duoxuanTitles.indexOf(title)== -1){
			duoxuanTitles.push(title);
			duoxuanAnswer.push(answer);
		}
	}
	setStorageArr("duoxuanTitles", duoxuanTitles);
	setStorageArr("duoxuanAnswer", duoxuanAnswer);
	
	//获取判断题
	for(var i = 121;i< 161;i++){
		var doc = document.getElementsByClassName("ui-field-contain")[i];
		doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio")[0].click();
		doc.getElementsByClassName("sumitbutton")[0].click();
		var title = doc.getElementsByClassName("topichtml")[0].innerText;
		const reg = /正确答案为：(.+)/;
		var str = doc.innerText;
		var answer 
		if(str.indexOf("回答错误，正确答案为")!= -1){
			var matchRes = str.match(reg);
			answer = matchRes ? matchRes[1] : '';
		}else{
			answer = doc.getElementsByClassName("ui-controlgroup")[0].getElementsByClassName("ui-radio")[0].innerText;
		}
		if(panduanTitles.indexOf(title)== -1){
			panduanTitles.push(title);
			panduanAnswer.push(answer);
		}
	}
	setStorageArr("panduanTitles", panduanTitles);
	setStorageArr("panduanAnswer", panduanAnswer);
	console.log("单选题数量："+danxuanTitles.length);
	console.log("多选题数量："+duoxuanTitles.length);
	console.log("判断题数量："+panduanTitles.length);
}

caiji("B");
