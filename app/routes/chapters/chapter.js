import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  	window.console.log('in routes/chapters/chapter.js');
    return this.store.find('chapter', params.chapter_id);
  }
});
