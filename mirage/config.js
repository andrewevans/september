export default function() {

  this.get('/chapters', function() {
    return {
      data: [{
        type: 'chapters',
        id: 1,
        attributes: {
          title: 'Are You High Risk?',
          description: 'Take this assessment.',
          location: 'San Francisco',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'chapters',
        id: 2,
        attributes: {
          title: 'How is Your Health?',
          description: 'Take this health assessment.',
          location: 'San Francisco',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'chapters',
        id: 3,
        attributes: {
          title: 'How Are You Feeling Today?',
          description: 'Let\'s talk about you are doing.',
          location: 'New York',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }]
    };
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
