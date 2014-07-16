Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],
  
  initialize: function () {
    this.listenTo(
      this.collection, "remove add change:title reset", this.render
    );
  },
   
  events: {
    "click button.delete": "removePost"
  },
  
  removePost: function (event) {
    var postId = $(event.target).attr("data-id"); 
    var post = this.collection.get(postId);
    post.destroy();
  },
  
  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    
    return this;
  }
});