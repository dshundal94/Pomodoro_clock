$(document).ready(function() {
  var initialWork = 25; 
  var i;
  var initialRest = 5;
  var timeInterval;
  var countDown = initialWork + ":" + "00";
  var initialCommand = "START";
  var start = document.getElementById("start");
  var workTime = document.querySelector("#workDisplay");
  var restTime = document.querySelector("#restDisplay");
  var display = document.querySelector('#center');
  workTime.textContent = initialWork;
  restTime.textContent = initialRest;
  display.textContent = countDown;
  start.textContent = initialCommand;
  var start = document.getElementById("start");
  var reset = document.getElementById("reset");
  var restAdd = document.getElementById("restAdd");
  var restMinus = document.getElementById("restMinus");
  var workAdd = document.getElementById("workAdd");
  var workMinus = document.getElementById("workMinus");
  restAdd.onclick = function() {
    if(initialRest < 30) {
      initialRest += 1;
      var restTime = document.querySelector("#restDisplay");
      restTime.textContent = initialRest;
    }
  }
  restMinus.onclick = function() {
    if (initialRest > 1) {
      initialRest -= 1;
      var restTime = document.querySelector("#restDisplay");
      restTime.textContent = initialRest;
    }
  }
   workAdd.onclick = function() {
    if(initialWork < 90) {
      initialWork += 1;
      var workTime = document.querySelector("#workDisplay");
      workTime.textContent = initialWork;
      var countDown = initialWork + ":" + "00";
      var display = document.querySelector('#center');
      display.textContent = countDown;
    }
  }
  
 workMinus.onclick = function() {
  if(initialWork > 1) {
    initialWork -= 1;
    var workTime = document.querySelector("#workDisplay");
    workTime.textContent = initialWork;
    var countDown = initialWork + ":" + "00";
    var display = document.querySelector('#center');
    display.textContent = countDown;
  }
}
  start.onclick = function () {
    var testing = 60 * initialWork;
    var display = document.querySelector('#center');
    startPomodoro();
  }
  function startTimer(duration, display) {
    var start = Date.now(), diff, minutes, seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
          clearInterval(timeInterval);
          if (i === 0) {
              startBreak();
          } else if (i === 1) {
              startPomodoro();
          }
        }
    };
    
    function resetAll () {
        $('#start').prop('disabled', false);
        $("#home").css('background-color', 'white');
        $("#start").removeClass('hidden');
        $("#reset").addClass('hidden');
        $("#title").css('color', 'black');
        $("#logo").css('color', 'blue');
        $("#upper").css('border-color', 'black');
        $("#rest").css('color', 'black');
        $("#work").css('color', 'black');
        $("#rest").css('font-size', '25px');
        $("#work").css('font-size', '25px');
        $("#restDisplay").css('color', 'black');
        $("#workDisplay").css('color', 'black');
        $("#center").css('color', 'black');
        $("#middle").css('border-color', 'black');
        $("#lower").css('border-color', 'black');
        $("#start").css('color', 'black');
        clearInterval(timeInterval);
	  };
    
    timer();
    var timeInterval = setInterval(timer, 1000);
    reset.onclick = function() {
    resetAll();
    }
  }
  function startBreak () {
    $("#home").css('background-color', '#FFA54F');
    $("#title").css('color', '#458B74');
    $("#logo").css('color', 'white');
    $("#upper").css('border-color', '#458B74');
    $("#restDisplay").css('color', '#458B74');
    $("#workDisplay").css('color', '#458B74');
    $("#rest").css('font-size', '25px');
    $("#work").css('font-size', '15px');
    $("#work").css('padding-top', '2.5px');
    $("#rest").css('color', 'white');
    $("#work").css('color', '#458B74');
    $("#center").css('color', '#458B74');
    $("#middle").css('border-color', '#458B74');
    $("#lower").css('border-color', '#458B74');
    $("#start").css('color', 'white');
    var resting = 60 * initialRest;
		startTimer(resting, display);
		i = 1;
	}
  function startPomodoro() {
    $("#start").addClass('hidden');
    $("#reset").removeClass('hidden');
    $("#home").css('background-color', '#458B74');
    $("#title").css('color', '#FFA54F');
    $("#logo").css('color', 'white');
    $("#upper").css('border-color', '#FFA54F');
    $("#restDisplay").css('color', '#FFA54F');
    $("#workDisplay").css('color', '#FFA54F');
    $("#rest").css('font-size', '15px');
    $("#rest").css('padding-top', '2.5px');
    $("#work").css('font-size', '25px');
    $("#rest").css('color', '#FFA54F');
    $("#work").css('color', 'white');
    $("#center").css('color', '#FFA54F');
    $("#middle").css('border-color', '#FFA54F');
    $("#lower").css('border-color', '#FFA54F');
    $("#start").css('color', 'white');
    var testing = 60 * initialWork;
    startTimer(testing, display); 
    i = 0;
  }
});