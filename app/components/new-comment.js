import Ember from 'ember';

export default Ember.Component.extend({

  saveComment() {
      var params = {
        user: this.get('user'),
        text: this.get('text'),
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    },

});
