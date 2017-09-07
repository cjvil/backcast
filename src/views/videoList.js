var VideoListView = Backbone.View.extend({

  initialize: function () {
    //only for passing mocha tests.
    this.collection.on('sync', this.render, this);

    this.collection.on('reset', () => { this.render(); }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').empty();
    this.collection.forEach(element => {
      var videolistentryview = new VideoListEntryView({model: element});
      this.$('.video-list').append(videolistentryview.render());
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
