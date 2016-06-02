import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chapters', function() {
    this.route('chapter', { path: '/:chapter_id' });
  });
});

export default Router;
