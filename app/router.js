import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chapters', function() {
    this.route('chapter', { path: '/:chapter_id' });
  });

  this.route('questions', function() {
    this.route('question', { path: '/:question_id' });
  });
});

export default Router;
