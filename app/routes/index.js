import Ember from 'ember';

var posts = [{
  id: 1,
  user: "Totoro",
  title: "Favorite childhood movie",
  text: "In 1958 Japan, university professor Tatsuo Kusakabe and his two daughters, Satsuki and Mei, move into an old house to be closer to the hospital where their mother Yasuko is recovering from a long-term illness. Satsuki and Mei find that the house is inhabited by tiny animated dust creatures called susuwatari – small, dark, dust-like house spirits seen when moving from light to dark places.[note 1] When the girls become comfortable in their new house and laugh with their father, the soot spirits leave the house to drift away on the wind. It is implied that they are going to find another empty house – their natural habitat.",
  image: "http://potinhodexp.files.wordpress.com/2009/10/calcifer.jpg"
}, {
  id: 2,
  user: "Totoro",
  title: "Almost missed a comma here!",
  text: "One day, Mei sees two white, rabbit-like ears in the grass and follows the ears under the house. She discovers two small magical creatures who lead her through a briar patch and into the hollow of a large camphor tree. She meets and befriends a larger version of the same kind of spirit, which identifies itself by a series of roars that she interprets as Totoro. She falls asleep atop the large totoro, but when Satsuki finds her, she is on the ground in a dense briar clearing. Despite her many attempts, Mei is unable to show her family Totoro's tree. Her father comforts her by telling her that this is the keeper of the forest, and that Totoro will reveal himself when he wants to.",
  image: "http://providencechildrensfilmfestival.org/wp-content/uploads/2015/08/my-neighbor-totoro-wallpaper-gd.jpg"
}, {
  id: 3,
  user: "Howl's Moving Castle",
  title: "Calcifer's slow burn...",
  text: "Mei's disappearance prompts Satsuki and the neighbors to search for her. Eventually, Satsuki returns in desperation to the camphor tree and pleads for Totoro's help. Delighted to be of assistance, he summons the Catbus, which carries her to where the lost Mei sits. Having rescued her, the Catbus then whisks her and Satsuki over the countryside to see their mother in the hospital. The girls perch in a tree outside of the hospital, overhearing a conversation between their parents and discovering that she has been kept in hospital by a minor cold and is otherwise doing well. They secretly leave the ear of corn on the windowsill, where it is discovered by the parents, and return home on the Catbus. When the Catbus departs, it disappears from the girls' sight.",
  image: "http://guidelive.pegasus.imgix.net/img/photos/2015/08/07/howls_moving_castle_artwork_prop_10.jpg"
}];

export default Ember.Route.extend({
  model() {
    return posts;
  },
});
