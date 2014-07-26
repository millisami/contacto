import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.store.createRecord('contact');
	},
  deactivate: function () {
    var model = this.get('controller.model');
    model.rollback();
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  }

});
