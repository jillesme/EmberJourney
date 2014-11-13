var users = [
  {
    firstName: 'Samuel',
    lastName: 'Jackson',
    email: 'samuel@acting.me',
    age: 63
  },
  {
    firstName: 'Marthin Luther',
    lastName: 'King',
    email: 'martin@luther.io',
    age: 152
  },
  {
    firstName: 'Neil',
    lastName: 'Armstrong',
    email: 'strong@legs.com',
    age: 100
  },
  {
    firstName: 'Barrrack',
    lastName: 'Bomama',
    email: 'president@gmail.com',
    age: 55
  },
];

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
  // model overwrites the setupController
  model: function () {
    return users;
  }
});


App.SettingsRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', 'Settings');
  }
});
