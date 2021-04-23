let timeLeft;
let btn = document.getElementById('1');
let btn2 = document.getElementById('2');
let hidden = true;
let timerContent = document.getElementById('first');
let time = document.getElementById('timer');
let hiddenContent = document.getElementById('second');
document.getElementById('spoiler').style.display='none';

//timer
function start(){
  time.textContent = '';
  timeLeft = 10;
  start2();
}
function stop(){
  time.appendChild(document.createTextNode('STOP !'));
  //time.textContent = 'STOP !';
  time.style.color = 'red';
  time.style.fontWeight = '700';
};
function start2(){
  let time = setTimeout(timer, 1000);
};
function timer(){
  if(timeLeft == 0){
    stop();
  }else{
    if(timeLeft >= 6){
      time.style.color = 'green';
    }else if(timeLeft >= 4){
      time.style.color = 'orange';
    }else{
      time.style.color = 'red';
    }
    time.appendChild(document.createTextNode(timeLeft));
    linebreak = document.createElement("br");
    time.appendChild(linebreak);
    timeLeft--
    start2();
  };
};

//spoiler
function start3(){
  if(hidden == true){
    hidden = false;
    btn2.textContent = 'Masquer';
    document.getElementById('spoiler').style.display='block';
  }else{
    hidden = true;
    btn2.textContent = 'Afficher';
    document.getElementById('spoiler').style.display='none';
  }
}

function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
    var t = setTimeout(function(){ currentTime() }, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();

btn.onclick = () => start();
btn2.onclick = () => start3();