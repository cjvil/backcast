var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    var videoplayerview = new VideoPlayerView({collection: this.videos});
    videoplayerview.render();
    var videolistview = new VideoListView({collection: this.videos});
    videolistview.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
