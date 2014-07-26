import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ContactoENV.locationType
});

Router.map(function() {
  this.resource('contacts', { path: '/contacts' }, function() {
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('new');
  });
  this.route('contacts/edit');
});

export default Router;
