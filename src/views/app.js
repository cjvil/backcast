var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
    var videoplayerview = new VideoPlayerView({collection: this.videos});
    var videolistview = new VideoListView({collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
