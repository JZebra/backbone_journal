Journal.Views.PostForm = Backbone.View.extend({
  template: JST["post_form"],
  
  events: {
    "submit form": "submitPost"
  },
  
  render: function () {

    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    
    return this;
  },
  
  submitPost: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    if (this.model.isNew()) {
      this.createPost(params);
    } else {
      this.updatePost(params);
    }
  },
 
  createPost: function (params) {
    var model = this.model;
    model.set(params["post"]);
    this.collection.create(this.model, {
      success: function () {
        Backbone.history.navigate("#/posts/" + model.get('id'));
      },
      error: function () {
        console.log("WTF?");
      },
      wait: true
    });
  },
  
  updatePost: function (params) {
    var model = this.model;
    model.save(params["post"], {
      success: function () {
        Backbone.history.navigate("#/posts/" + model.get('id'));
      },
      error: function () {
        console.log("WTF?");
      }
    });
    this.render();
  }
});