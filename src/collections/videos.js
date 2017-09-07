var Videos = Backbone.Collection.extend({

  model: Video,
  search: function () {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'key': YOUTUBE_API_KEY, 
        'maxResults': '5',
        'part': 'snippet',
        'q': 'surfing',
        'type': 'video',
        'videoEmbeddable': true},
      success: function (data) {
        console.log('youtube: Got the Data', data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('youtube: Failed to get data', data);
      }
    });  
  }

});
