var App = Ember.Application.create();

App.days = 0;

App.ApplicationController = Ember.Controller.extend({
  days: (function () {
    var started = new Date(2014, 10, 11); // Shitty date
    var today = new Date();

    var elapsed = today.getTime() - started.getTime();
    var days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    return days;
  })()

});
