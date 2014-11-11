var mins;
var secs;

function cd() {
 	mins = 1 * m("1"); // change minutes here
 	secs = 0 + s(":00"); // change seconds here (always add an additional second to your total)
 	redo();
}

function m(obj) {
 	for(var i = 0; i < obj.length; i++) {
  		if(obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(obj.substring(0, i));
}

function s(obj) {
 	for(var i = 0; i < obj.length; i++) {
  		if(obj.substring(i, i + 1) == ":")
  		break;
 	}
 	return(obj.substring(i + 1, obj.length));
}

function dis(mins,secs) {
 	var disp;
 	if(mins <= 9) {
  		disp = " 0";
 	} else {
  		disp = " ";
 	}
 	disp += mins + ":";
 	if(secs <= 9) {
  		disp += "0" + secs;
 	} else {
  		disp += secs;
 	}
 	return(disp);
}

function redo() {
 	secs--;
 	if(secs == -1) {
  		secs = 59;
  		mins--;
 	}
 	document.getElementById('txt1').value = dis(mins,secs); // setup additional displays here.
 	if((mins == 0) && (secs == 0)) {
		//window.alert("Time is up.Your score is "+score); // change timeout message as required
		document.getElementById('txt3').value = score;
  		window.location = "#score" // redirects to specified page once timer ends and ok button is pressed
 	} else {
 		cd = setTimeout("redo()",1000);
 	}
}
/*function pause() {
    clearTimeout(cd);
}*/
function resume() {
    cd= setTimeout("redo()",1000);
}

		
$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(300);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
/*MGA FUNCTION NG BUTTONS*/
function gotopage()
{
	window.location = "game.html";
}
		/*FOR START GAME*/
		function changestart(){
			document.getElementById("startgame").src="images/pic/startgame2.png";
		}
		function changestart2(){
			document.getElementById("startgame").src="images/pic/startgame.png";
		}
		/*FOR PLAY BUTTONS*/
		function changeplay(){
			document.getElementById("play").src="images/pic/playz2.png";
		}
		function changeplay2(){
			document.getElementById("play").src="images/pic/playz.png";
		}
		/*FOR PLUS*/
		function changeplus(){
			document.getElementById("+").src="images/pic/plus2.png";
			document.getElementById("what").src="images/pic/plus.png";
		}
		function changeplus2(){
			document.getElementById("+").src="images/pic/plus.png";
			document.getElementById("what").src="images/pic/questionmark.png";
		}
		/*FOR MINUS*/
		function changeminus(){
			document.getElementById("-").src="images/pic/minus2.png";
			document.getElementById("what").src="images/pic/minus.png";
		}
		function changeminus2(){
			document.getElementById("-").src="images/pic/minus.png";
			document.getElementById("what").src="images/pic/questionmark.png";
		}
		/*FOR MULTIPLY*/
		function changetimes(){
			document.getElementById("*").src="images/pic/times2.png";
			document.getElementById("what").src="images/pic/times.png";
		}
		function changetimes2(){
			document.getElementById("*").src="images/pic/times.png";
			document.getElementById("what").src="images/pic/questionmark.png";
		}
		/*FOR DIVIDE*/
		function changedivide(){
			document.getElementById("/").src="images/pic/divide2.png";
			document.getElementById("what").src="images/pic/divide.png";
		}
		function changedivide2(){
			document.getElementById("/").src="images/pic/divide.png";
			document.getElementById("what").src="images/pic/questionmark.png";
		}
		/*FOR QUIT*/
		function changequit(){
			document.getElementById("quit").src="images/pic/quit2.png";
		}
		function changequit2(){
			document.getElementById("quit").src="images/pic/quit.png";
		}
		/*FOR PAUSE*/
		function changepause(){
			document.getElementById("pause").src="images/pic/pause2.png";
		}
		function changepause2(){
			document.getElementById("pause").src="images/pic/pause.png";
		}
		/*FOR RESUME*/
		function changeresume(){
			document.getElementById("resumes").src="images/pic/resume2.png";
		}
		function changeresume2(){
			document.getElementById("resumes").src="images/pic/resume.png";
		}
		/*FOR RESTART*/
		function changerestart(){
			document.getElementById("restarts").src="images/pic/restartgame2.png";
		}
		function changerestart2(){
			document.getElementById("restarts").src="images/pic/restartgame.png";
		}
		/*FOR PLAYAGAIN*/
		function changeplayagain(){
			document.getElementById("playagain").src="images/pic/playagain2.png";
		}
		function changeplayagain2(){
			document.getElementById("playagain").src="images/pic/playagain.png";
		}
		/*FOR BTMM*/
		function changebtmm(){
			document.getElementById("btmm").src="images/pic/btmm2.png";
		}
		function changebtmm2(){
			document.getElementById("btmm").src="images/pic/btmm.png";
		}
		
function gotoindex()
{
	window.location = "index.html#sixtoninemain";
}

function gotomenu()
{
if(document.getElementById("num1").value==""||document.getElementById("num2").value=="")
{
//alert("Click start to start the game");
}
else
{
window.location = "game.html#menu";
clearTimeout(cd);
}
}
/*FUNCTIONS NG MGA BUTTON*/











/*function init() {
  cd();
}
window.onload = init;*/