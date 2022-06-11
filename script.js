
const timer=document.getElementById('disp');

var hr;
var min;
var sec;
var starttime;

function strt(){
	hr=0;
	min=0;
	sec=0;
	starttime=true;
	timerC();}

function stop(){
	if (starttime==true) {
		starttime=false;}}

function timerC(){
	if (starttime==true) {
		sec=parseInt(sec);
		min=parseInt(min);
		hr=parseInt(hr);

		sec=sec+1;

		if(sec==60){
			min=min+1;
			sec=0;
		}
		if(min==60){
			hr=hr+1;
			min=0;
			sec=0;
		}
		 if (sec < 10 || sec == 0) {
      	 sec = '0' + sec;
    	}
    	if (min < 10 || min == 0) {
      	min = '0' + min;
    	}
    	if (hr < 10 || hr == 0) {
      	hr = '0' + hr;
    	}
	
	timer.innerHTML=hr+ ":" +min+ ":" +sec;
	setTimeout("timerC()", 1000);
}

}

function re(){
	timer.innerHTML="00:00:00";
	starttime=false;
	hr=0;
	min=0;
	sec=0;}


