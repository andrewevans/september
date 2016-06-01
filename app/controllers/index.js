import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,
  actions: {
    autoComplete(param) {
      if (param !== '') {
        this.get('store').query('chapter', { location: param }).then((result) => this.set('filteredList', result));
      } else {
        this.set('filteredList', null);
      }
    },
    search(param) {
      if (param !== '') {
        this.store.query('chapter', { location: param }).then((result) => this.set('model', result));
      } else {
        this.get('store').findAll('chapter').then((result) => this.set('model', result));
      }
    }
  }
});
