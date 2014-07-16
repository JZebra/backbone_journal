Journal.Routers.JournalRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id/edit": "postEdit",
    "posts/:id": "postShow" 
  },
  
  postEdit: function (id) {
    var post = Journal.Collections.posts.getOrFetch(id);
    var formView = new Journal.Views.PostForm({model: post});
    
    this.$rootEl.html(formView.render().$el);
  },
  
  postsIndex: function () {
    var indexView = new Journal.Views.PostsIndex({collection: Journal.Collections.posts});
    
    this.$rootEl.html(indexView.render().$el);
  },
  
  postNew: function() {
    var post = new Journal.Models.Post();
    var posts = Journal.Collections.posts;
    var formView = new Journal.Views.PostForm({model: post, collection: posts});

    this.$rootEl.html(formView.render().$el);
  },
  
  postShow: function (id) {
    var post = Journal.Collections.posts.getOrFetch(id);
    var showView = new Journal.Views.PostShow( {model: post} );
    
    this.$rootEl.html(showView.render().$el);
  }
  
  
});