import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  	window.console.log('in routes/chapters.js');
    return this.store.findAll('chapter');
  }
});
