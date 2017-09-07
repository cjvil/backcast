var VideoListView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('sync', this.render, this);
  //  this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(function(element) {
      var videolistentryview = new VideoListEntryView({model: element});
      this.$el.append(videolistentryview.render());
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
