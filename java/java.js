window.onload = function() {
    countUpFromTime("March 16, 2021 05:51:00", 'countup1');
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }


  document.getElementById("button").addEventListener("click", function(){
	var audio = document.getElementById("music");
  if(this.className == 'is-playing'){
    this.className = "";
    this.innerHTML = "Play"
    audio.pause();
  }
  else
  {
    this.className = "is-playing";
    this.innerHTML = "Pause";
    audio.play();
  }

});

function toggleText() {
  var text = document.getElementById("love");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
