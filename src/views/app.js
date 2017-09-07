var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    //console.log(this.event);


    this.render();
    var videoplayerview = new VideoPlayerView({el: $('.player'), collection: this.videos, event: this.event});
    videoplayerview.render();
    var videolistview = new VideoListView({el: $('.list'), collection: this.videos});
    videolistview.render();
    this.videos.on('select', this.clickHandler, this);  

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  clickHandler: function(event) {
    var currentvideo = new Videos(event);
    console.log(currentvideo);
    var videoplayerview = new VideoPlayerView({el: $('.player'), collection: currentvideo});
    videoplayerview.render();
  },


  template: templateURL('src/templates/app.html')

});
