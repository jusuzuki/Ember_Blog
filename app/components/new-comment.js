import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: true,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        text: this.get('text') ? this.get('text') : "",
        post: this.get('post') ? this.get('post') : "",
        date_added: Date.now()
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    },
  }
});
