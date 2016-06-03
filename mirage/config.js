export default function() {

  let questions = [{
    type: 'questions',
    id: 1001,
    attributes: {
      title: 'Are you pregnant?',
      description: '',
      type: 'select',
      options: [
        'Yes',
        'No',
        'I don\'t know',
        ],
    }
  }, {
    type: 'questions',
    id: 1015,
    attributes: {
      title: 'How old are you?',
      description: '',
      type: 'input',
      options: [],
    }
  }, {
    type: 'questions',
    id: 1007,
    attributes: {
      title: 'Select all the ailments that you have',
      description: '',
      type: 'checkbox',
      options: [{
        title: 'Depression',
        isChecked: false,
      }, {
        title: 'Anxiety',
        isChecked: false,
      }, {
        title: 'Cat scratch fever',
        isChecked: false,
      }, {
        title: 'Insane in the membrane',
        isChecked: false,
      }],
    },
  }];

  let chapters = [{
    type: 'chapters',
    id: 103,
    attributes: {
      title: 'Are You High Risk?',
      description: 'Take this assessment.',
      location: 'San Francisco',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
    }
  }, {
    type: 'chapters',
    id: 115,
    attributes: {
      title: 'How is Your Health?',
      description: 'Take this health assessment.',
      location: 'San Francisco',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
    }
  }, {
    type: 'chapters',
    id: 117,
    attributes: {
      title: 'How Are You Feeling Today?',
      description: 'Let\'s talk about you are doing.',
      location: 'New York',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
    }
  }, {
    type: 'chapters',
    id: 118,
    attributes: {
      title: 'What Kind of Doctor is Right for You',
      description: 'Picking a doctor that fits your needs is important',
      location: 'Los Angeles',
      image: '',
    }
  }];

  this.get('/chapters/:chapter_id', function(db, request) {
    return {data: chapters[request.params.chapter_id]};
  });

  this.get('/chapters', function(db, request) {

    if (request.queryParams.location !== undefined) {
      let filteredChapters = chapters.filter(function (i) {
        return i.attributes.location.toLowerCase().indexOf(request.queryParams.location.toLowerCase()) !== -1;
      });
      return {data: filteredChapters};
    } else {
      return {data: chapters};
    }
  });

  this.get('/questions', function(db, request) {
    return { data: questions};
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */
}
