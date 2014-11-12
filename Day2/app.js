var App = Ember.Application.create();

App.Router.map(function () {
  // this.route('index', { path: '/' }); -- this is default
  this.route('page', { path: '/page' });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', 'Hoooomeee page!!!');
  }
});

App.PageRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('title', '~ a page ~');
  }
});
