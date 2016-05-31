export default function() {
  this.get('/chapters', function(db, request) {

    let chapters = [{
      type: 'chapters',
      id: 103,
      attributes: {
        title: 'A Journey to the Center of the Baby!!',
        length: '10',
        city: 'San Francisco',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
      }
    }, {
      type: 'chapters',
      id: 115,
      attributes: {
        title: 'Let\'s Talk Weight',
        length: '13',
        city: 'San Francisco',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
      }
    }, {
      type: 'chapters',
      id: 117,
      attributes: {
        title: '12 Habits of a Pregnant Mom',
        length: '52',
        city: 'New York',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
      }
    }];


    if(request.queryParams.city !== undefined) {
      let filteredChapters = chapters.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredChapters };
    } else {
      return { data: chapters };
    }
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
