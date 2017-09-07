var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.search('kittens');

    this.render();
    var videoplayerview = new VideoPlayerView({el: $('.player'), collection: this.videos});
    var videolistview = new VideoListView({el: $('.list'), collection: this.videos});
    var searchview = new SearchView({el: $('.search'), collection: this.videos});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
