var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.model = this.collection.models[0];
    this.collection.on('select', this.render, this);
  },

  render: function() {
    if (!this.model) {
      this.$el.html(this.template());
    } else {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
