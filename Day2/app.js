var App = Ember.Application.create();

App.Router.map(function () {
  this.route('index', { path: '/' });
  this.route('page', { path: '/page' });
});
