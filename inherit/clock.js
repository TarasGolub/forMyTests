function Clock(options) {

  this._template = options.template;
  

  // function render() {
  //   var date = new Date();

  //   var hours = date.getHours();
  //   if (hours < 10) hours = '0' + hours;

  //   var min = date.getMinutes();
  //   if (min < 10) min = '0' + min;

  //   var sec = date.getSeconds();
  //   if (sec < 10) sec = '0' + sec;

  //   var output = template.replace('h', hours).replace('m', min).replace('s', sec);

  //   console.log(output);
  // }

  // this.stop = function() {
  //   clearInterval(timer);
  // };

  // this.start = function() {
  //   render();
  //   timer = setInterval(render, 1000);
  // };

}

Clock.prototype.render = function() {
    var date = new Date();
    var self = this;

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = self._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.start = function() {
    this.render();
    var self = this;
    this._timer = setInterval(function(){self.render();}, 1000);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer)
};

var clock = new Clock({
      template: 'h:m:s'
    });
    clock.start();
    clock.stop();
