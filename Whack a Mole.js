var blue="url('https://www.appmachine.com/wp-content/uploads/2016/02/No-Branding-Header-Background-1.jpg')"
var mole="url('https://img.123clipartpng.com/graphic-download-by-aznballer-on-deviantart-banner-freeuse-stock-mole-clipart-whack-a-mole-clipart-400_307.png')"
	
var cancel=setInterval(flick,1000);

var MolePosition=0;

var UserScore=0;
document.getElementById('score').innerHTML=UserScore;

// set up timer
document.getElementById('timer').innerHTML =
  000 + ":" + 10;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){alert("Time's  Up! Your Score is "+ UserScore);clearInterval(cancel)}
  else{
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  //console.log(m)
  setTimeout(startTimer, 1000);
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
// timer ends


//random images
function flick(){
	clear();
	var i= Math.floor((Math.random() * 100)%8)+1
	console.log(i)
	MolePosition=i;
	element=document.getElementById('item'+i)
	element.style.backgroundImage = mole; //"url('https://img.123clipartpng.com/graphic-download-by-aznballer-on-deviantart-banner-freeuse-stock-mole-clipart-whack-a-mole-clipart-400_307.png')";	
	element.style.backgroundSize = "100% 100%";
}

//set default image
function clear(){
	for(i=1;i<10;i++){
	element=document.getElementById('item'+i)
	element.style.backgroundImage = blue ;//"url('https://www.appmachine.com/wp-content/uploads/2016/02/No-Branding-Header-Background-1.jpg')";	
	element.style.backgroundSize = "auto";}
	MolePosition=0;
}

function clicked(element){
console.log(element+' was clicked')
if ( element == 'item'+MolePosition){
	UserScore+=50;
	flick();
}
else{UserScore-=50;}
document.getElementById('score').innerHTML=UserScore;		
}	
