import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post,params) {
      this.sendAction('update', post, params);
    },

    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },

    saveComment(params) {
      // var newComment = this.store.createRecord('comment', params);
      // var post = params.post;
      // post.get('comment').addObject(newComment);
      // newComment.save().then(function() {
      //   return post.save();
      // });
      // this.transitionTo('post', params.post);
      this.sendAction('saveComment', post, params);
    }
  }
});
