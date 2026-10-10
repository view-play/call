		
	   const MS_TOKEN = "ms-4a16989a-513e-41ce-989f-0df3af1a5bdf";
	   
	   
	   function dati(){
		    getAnswer("地球围绕什么天体旋转？A月球 B太阳 C火星");
			
		}
	
	async function getAnswer(question) {
	  const res = await fetch("https://api-inference.modelscope.cn/v1/chat/completions", {
	    method: "POST",
	    headers: {
	      Authorization: `Bearer ${MS_TOKEN}`,
	      "Content-Type": "application/json"
	    },
	    body: JSON.stringify({
	      model: "Qwen/Qwen3.5-27B",
	      messages: [
	        {role:"system", content:"你是答题助手，选择题只输出选项字母，简答只输出精简答案，不要多余文字。"},
	        {role:"user", content: question}
	      ],
	      temperature:0.1
	    })
	  })
	  const data = await res.json();
	  if(data.error){
	    console.error("调用失败：", data.error)
	    return;
	  }
	  
	  document.getElementById("answer").innerText = data.choices[0].message.content; 
	  console.log(data.choices[0].message.content);
	  
	}
	 
	
	document.getElementById("xianti").addEventListener("click", xianti);
	document.getElementById("xiati").addEventListener("click", xiati);
	document.getElementById("dati").addEventListener("click", dati);
	
	function getText(){
		var current = document.getElementById("start").value;
		// var current = 1;
		var title = document.getElementsByClassName("field-label")[current].innerText;;
		var answers  = document.getElementsByClassName("ui-controlgroup")[current-1].innerText;
		var list =  answers.split("\n");
		var answerText="";
		for(var i = 1;i<list.length+1; i++){
			answerText+= "选项"+i+ ":" +list[i-1]+";";
			
		}
		var text ="问题："+ title +";"+ answerText;
		return text;
	}
	function xianti(){

		document.getElementById("answer").innerText = getText(); 
	}
	
	function xiati(){
		  document.getElementById("start").value = document.getElementById("start").value +1;
		  getAnswer(getText());
		
	} 
	
	function dati(){
		  getAnswer(getText());
		
	}
	