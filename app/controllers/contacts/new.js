import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function () {
      var self = this;
      return this.get('content').save().then(function () {
        self.transitionToRoute('contacts.index');
      });
    }
  }
});
