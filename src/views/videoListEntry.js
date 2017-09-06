var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('sync', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
