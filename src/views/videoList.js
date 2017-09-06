var VideoListView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('sync', this.render, this);
  //  this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.map(element => {
      new VideoListEntryView({model: element});
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
