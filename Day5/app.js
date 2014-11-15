var users = [
  {
    id: 10001,
    firstName: 'Samuel',
    lastName: 'Jackson',
    email: 'samuel@acting.me',
    age: 63
  },
  {
    id: 10002,
    firstName: 'Marthin Luther',
    lastName: 'King',
    email: 'martin@luther.io',
    age: 152
  },
  {
    id: 10003,
    firstName: 'Neil',
    lastName: 'Armstrong',
    email: 'strong@legs.com',
    age: 100
  },
  {
    id: 10004,
    firstName: 'Barrrack',
    lastName: 'Bomama',
    email: 'president@gmail.com',
    age: 55
  },
];

var App = Ember.Application.create();

App.Router.map(function () {
  this.route('page');
  this.route('users', function () {
    this.resource('user', { path: '/:id' });
  });
  this.route('settings');
});

App.IndexRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', 'User Manage Application');
  }
});

App.UsersRoute = Ember.Route.extend({
  model: function () {
    var data = {
      title: 'All Users',
      users: users
    };
    return data;
  }
});

App.SettingsRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', 'Settings');
  }
});
