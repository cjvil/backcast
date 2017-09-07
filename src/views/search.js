var SearchView = Backbone.View.extend({

  initialize: function () {
  },

  events: {
    'click .btn': 'handleClick',
    'keyup input': 'handleEnter'
  },

  handleClick: function(event) {
    var query = this.$('.form-control').val();
    this.collection.search(query, this.autoplay);
  },

  handleEnter: function(event) {
   // console.log(event);
    // if (event.keyCode === 13) {
    //   var query = this.$('.form-control').val();
    //   this.collection.search(query);
    // }
    var query = this.$('.form-control').val();
    this.collection.search(query, this.autoplay);

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
