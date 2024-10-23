
var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();


var countdownfunction = setInterval(function() {

  
  var now = new Date().getTime();
  
  
  var distance = countDownDate - now;
  
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
