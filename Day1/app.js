var App = Ember.Application.create();

App.days = 0;

(function () {
  var started = new Date(2014, 10, 8);
  var today = new Date();

  console.log(started);
  console.log(today);

  var elapsed = today.getTime() - started.getTime();
  var days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

  App.days = days;
})();
