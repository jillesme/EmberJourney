var App = Ember.Application.create();

App.Router.map(function () {
  this.route('page');
  this.route('users');
  this.route('settings');
});

App.IndexRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', 'User Manage Application');
  }
});

App.UsersRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', 'All Users');
}});

App.SettingsRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', 'Settings');
  }
});
