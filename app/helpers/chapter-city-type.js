import Ember from 'ember';

const chapterCityTypes = [
  'San Francisco',
  'Los Angeles'
];

export function chapterCityType([type]/*, hash*/) {
  window.console.log(chapterCityTypes);
  if (chapterCityTypes.contains(type)) {
    return 'Metropolis';
  }

  return 'Towns';
}

export default Ember.Helper.helper(chapterCityType);
