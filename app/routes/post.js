import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      posts: this.store.findRecord('post', params.post_id),
      comments: this.store.findAll('rental')
    });
  },

  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },

    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    saveComment(post, params){
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comment').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', params.post);
    }

  }
});
