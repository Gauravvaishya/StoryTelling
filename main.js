function myFunction(){
	var a=document.getElementById("a1").value;
	localStorage.setItem('inp1',a);
	var b=document.getElementById("a2").value;
	localStorage.setItem('inp2',b);
	 // var c=document.getElementById("a3").value;
	 // localStorage.setItem('inp3',c);

	 if(document.getElementById("a3").checked){
         var x=document.getElementById("a3").value;
         localStorage.setItem("inp3",x);
	 }
	 else if(document.getElementById("a11").checked){
	 	var x=document.getElementById("a11").value;
	 	localStorage.setItem("inp3",x);
	 }
	 else{
	 	var x="yes";
	 	localStorage.setItem("inp3",x);
	 }

	var d=document.getElementById("a4").value;
	 localStorage.setItem('inp4',d);
	var e=document.getElementById("a5").value;
	 localStorage.setItem('inp5',e);
	 var f=document.getElementById("a6").value;
	 localStorage.setItem('inp6',f);
	 var g=document.getElementById("a7").value;
	 localStorage.setItem('inp7',g);
	 var h=document.getElementById("a8").value;
	 localStorage.setItem('inp8',h);
	 var i=document.getElementById("a9").value;
	 localStorage.setItem('inp9',i);
	 var j=document.getElementById("message").value;
	 localStorage.setItem('inp10',j);

	
	
}

    for(var i=0;i<8;i++){
	document.getElementsByClassName("tiger")[i].innerHTML=localStorage.getItem('inp1');
    }
    for(var i=0;i<9;i++){
	document.getElementsByClassName("lion")[i].innerHTML=localStorage.getItem('inp2');
    }

	 document.getElementById("yes").innerHTML=localStorage.getItem('inp3');
	 
	 document.getElementById("quick").innerHTML=localStorage.getItem('inp4');
	 document.getElementById("alarm").innerHTML=localStorage.getItem('inp5');
	document.getElementById("dog").innerHTML=localStorage.getItem('inp6');
	document.getElementById("exam").innerHTML=localStorage.getItem('inp7');

	  for(var i=0;i<3;i++){
	document.getElementsByClassName("running")[i].innerHTML=localStorage.getItem('inp8');
    }

	 document.getElementById("two").innerHTML=localStorage.getItem('inp9');
	 document.getElementById("msg1").innerHTML=localStorage.getItem('inp10');
   
 
