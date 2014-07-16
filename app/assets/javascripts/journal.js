window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var sidebar = new Journal.Views.PostsIndex({collection: Journal.Collections.posts});
    $("#sidebar").html(sidebar.render().$el);
    new Journal.Routers.JournalRouter({$rootEl: $('#content')});
    Backbone.history.start();
    
    Journal.Collections.posts.fetch();
  }
};

$(document).ready(function(){
  Journal.initialize();
});
