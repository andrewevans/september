import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chapters', function() {
  	window.console.log('in router.js');
    this.route('chapter', { path: '/:chapter_id' });
  });
});

export default Router;
