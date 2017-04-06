var expanded = false;
function expand(item){
	switch (expanded){
		case true:
			item.style.top = "90%";
			expanded = false;
			break;
		case false:
			item.style.top = "50%";
			expanded = true;
			break;
	}
}

function genNum(){
	console.log("pressed");
	var num1 = Math.floor((Math.random() * 100) + 1);
	console.log(num1);
	var num2 = Math.floor((Math.random() * 100) + 1);
	console.log(num2);
	console.log(num1+" + "+num2+" = ");
	var but1=document.createElement("button");
	but.id="problem";
	document.getElementById("problem").innerHTML=num1+" + "+num2+" = ";
}

	function create(item,value){
		var item=document.createElement(item);
		item.append(value);
		document.body.appendChild(item);
	}
	
	function play1(){
		var but[] =[];
		for (var i=0;i<3;i++)
			but[i]=document.createElement("button");
		but[1].onclick = "";
		document.body.appendChild(but[0]);
	}
	f