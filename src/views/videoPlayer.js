var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
    
    //for mocha tests
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.model = this.collection.models[0];
    
    if (!this.model) {
      this.$el.html(this.template());
    } else {
      this.$el.html(this.template(this.model.attributes));

       //for mocha tests
      this.model.select.call(this);
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
