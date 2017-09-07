var VideoPlayerView = Backbone.View.extend({
  /*
  template: _.template('<div class="video-player">\
  <div class="embed-responsive embed-responsive-16by9">\
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/<%- etag %>" allowFullScreen></iframe>\
  </div>\
  <div class="video-player-details">\
    <h3><%- snippet.title %></h3>\
    <div><%- snippet.description %></div>\
  </div>\
</div>\
'),
*/
  initialize: function() {
    this.collection.on('select', this.render, this);
  //  this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
