import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        text: this.get('text'),
        image: this.get('image'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
