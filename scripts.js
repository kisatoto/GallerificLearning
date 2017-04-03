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