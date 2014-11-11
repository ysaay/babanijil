var gamesign;
var randomnumber1,randomnumber2,score=0;
function start_timer()
{
cd();
generate();

}
function generate()
{
randomnumber1=Math.floor(Math.random()*11);
randomnumber2=Math.floor(Math.random()*11);
document.getElementById("rimg").value="play.png";
document.getElementById("what").value="what.png";
document.getElementById("num1").value=randomnumber1;
document.getElementById("num2").value=randomnumber2;
var sign=sign_generate();
//alert(sign);
if(sign=="/")
{
if((randomnumber1%randomnumber2)!=0)
sign="+";
}
gamesign=sign;
var result=compute(randomnumber1,gamesign,randomnumber2);
//var result=randomnumber1+randomnumber2;
//alert(result);
document.getElementById("res").value=result;
}
function sign_generate()
{
var signs=new Array(4);
signs[0]="+";
signs[1]="-";
signs[2]="*";
signs[3]="/";
var signindex = (Math.round((Math.random()*2)+1));
return signs[signindex];
}
function compute(randomnumber1,sign,randomnumber2)
{
if(sign=="+")
return randomnumber1+randomnumber2;
else if(sign=="-")
return randomnumber1-randomnumber2;
else if(sign=="*")
return randomnumber1*randomnumber2;
else if(sign=="/")
return randomnumber1/randomnumber2;
}
function compare(val)
{
if(document.getElementById("num1").value==""||document.getElementById("num2").value=="")
{
//alert("Click start to start the game");
}
else
{
	uservalue=compute(randomnumber1,val,randomnumber2);
	if(uservalue==document.getElementById("res").value)
	{
		score = Math.max(0,score+100);
		document.getElementById("rimg").src="images/pic/blankcheck.png";
		document.getElementById("txt2").value=score;
	}
	else if(uservalue!=document.getElementById("res").value)
	{
		score = Math.max(0,score-100);
		document.getElementById("rimg").src="images/pic/blankwrong.png";
		document.getElementById("txt2").value=score;
		
	}
	else
	document.getElementById("rimg").src="images/pic/blankwrong.png";
	generate();
}
}