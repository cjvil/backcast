var SearchView = Backbone.View.extend({

  initialize: function () {
  },

  events: {
    'click .btn': 'handleClick'
  },

  handleClick: function(event) {
    var query = this.$('.form-control').val();
   // var videos = new Video();
    console.log(this.collection.search(query));
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
