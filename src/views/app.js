var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
    var videoplayerview = new VideoPlayerView({el: $('.player'), collection: this.videos});
    videoplayerview.render();
    var videolistview = new VideoListView({el: $('.list'), collection: this.videos});
    videolistview.render();

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },



  template: templateURL('src/templates/app.html')

});
