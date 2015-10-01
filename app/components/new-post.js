import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        user: this.get('user') ? this.get('user') : "",
        title: this.get('title') ? this.get('title') : "",
        text: this.get('text') ? this.get('text') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
