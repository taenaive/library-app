import Ember from 'ember';

export default Ember.Controller.extend({

  checkNumberIn: '1024',
  //dateIn: 'null',
  checkNumberOut: Ember.computed('checkNumberIn', function() {
    return this.get('checkNumberIn');
  }),
  dateOut: Ember.computed('dateIn', function() {
    let fragmentedDate = this.get('dateIn').split('-');
    let temp = fragmentedDate[0]
    fragmentedDate[0]=fragmentedDate[1];
    fragmentedDate[1]=fragmentedDate[2];
    fragmentedDate[2]= temp;
    Ember.Logger.log(fragmentedDate.join('-'))
    return fragmentedDate.join('-');
  })
});
