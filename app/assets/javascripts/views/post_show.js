Journal.Views.PostShow = Backbone.View.extend({
  events: {
    "dblclick #title": "beginEdit",
    "blur #title": "endEdit",
    "dblclick #body": "beginEdit",
    "blur #body": "endEdit"
  },
  
  template: JST["post_show"],
  
  formTemplate: JST["post_form"],
  
  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    
    return this;
  },
  
  beginEdit: function (event) {
    event.preventDefault();
    field = $(event.currentTarget).attr('id')
    var $input = $('<input>');
    $input.attr('name', 'post[' + field + ']');
    $input.attr('type', 'text');
    $input.attr('value', this.model.get(field));
    $input.attr('id', field);
  
    $(event.currentTarget).replaceWith($input);
  },
  
  endEdit: function (event) {
    event.preventDefault();
    
    var params = $(event.currentTarget).serializeJSON();
    this.model.set(params["post"]);
    this.model.save();
    this.render();
  },
  
});