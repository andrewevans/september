import Ember from 'ember';

const shortLength = [
  '10',
  '13',
];

export function chapterQuestionLength([length]/*, hash*/) {
  if (shortLength.contains(length)) {
    return 'Short';
  }

  return 'Long';
}

export default Ember.Helper.helper(chapterQuestionLength);
