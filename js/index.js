	var mybox=document.getElementById("mybox");
	var num=0;
	var time=null;
	time = setInterval(function(){
		num=num+10;
		if(num>5200){
			num=0;
		}
		mybox.style.left=-num+'px';
	},50);




