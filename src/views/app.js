var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.search('kittens');

    
    this.render();
    var videoplayerview = new VideoPlayerView({el: $('.player'), collection: this.videos});
    var videolistview = new VideoListView({el: $('.list'), collection: this.videos});
    this.videos.on('select', this.clickHandler, this);  
    var searchview = new SearchView({el: $('.search'), collection: this.videos});
    searchview.render();

    this.videos.on('reset', () => {
      videolistview.render();
      videoplayerview.render();
    }, this);
   
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  clickHandler: function(event) {
    var currentvideo = new Videos(event);
    var videoplayerview = new VideoPlayerView({el: $('.player'), collection: currentvideo});
    videoplayerview.render();
  },


  template: templateURL('src/templates/app.html')

});
