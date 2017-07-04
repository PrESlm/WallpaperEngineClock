'use strict';

var timeElm = document.getElementById('time');
var doc = document.documentElement;
var clientWidth = doc.clientWidth;
var clientHeight = doc.clientHeight;

window.wallpaperPropertyListener={
  applyUserProperties: function(properties){
    if(properties.image){
      if(properties.image.value){
        document.body.style.backgroundImage = "url('file:///"+ properties.image.value +"')";
      }else{
        document.body.style.backgroundImage = "url('')";
      }
        document.body.style.backgroundSize = '100% 100%';
    };
  }
}

var pad = function pad(val) {
  return val < 10 ? '0' + val : val;
};

var time$ = Rx.Observable.interval(1000).map(function () {
  var time = new Date();

  return {
    hours: time.getHours()%12,
    minutes: time.getMinutes(),
    seconds: time.getSeconds()
  };
}).subscribe(function (_ref) {
  var hours = _ref.hours;
  var minutes = _ref.minutes;
  var seconds = _ref.seconds;

  timeElm.setAttribute('data-hours', pad(hours));
  timeElm.setAttribute('data-minutes', pad(minutes));
  timeElm.setAttribute('data-seconds', pad(seconds));
});