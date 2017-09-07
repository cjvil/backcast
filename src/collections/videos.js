var Videos = Backbone.Collection.extend({

  model: Video,
  search: _.debounce(function (query) {
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'key': window.YOUTUBE_API_KEY, 
        'maxResults': '5',
        'part': 'snippet',
        'q': query,
        'type': 'video',
        'videoEmbeddable': 'true'},
      success: data => {
        console.log('youtube: Got the Data', data);
        this.reset(this.parse(data));
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('youtube: Failed to get data', data);
      }
    });
  }, 500),  
  parse: function(data) {
    return data.items;
  }

});
