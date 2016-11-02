import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {

    this._super(controller, model);
    let date = new Date();
    let datePortion = Math.trunc(date.getDate()) < 10 ? `0${date.getDate()}` : date.getDate();
    Ember.Logger.log('today:', date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + datePortion);
    controller.set('dateIn', date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + datePortion);
    //controller.set('dateIn',date);
  },
});
