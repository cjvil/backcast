var SearchView = Backbone.View.extend({

  initialize: function () {
    //this.on('all', () => console.log(this), this);
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
