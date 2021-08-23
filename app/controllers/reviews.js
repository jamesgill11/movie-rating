import Controller from '@ember/controller';
import { action } from '@ember/object';
import firebase from 'firebase';

export default class MoviesController extends Controller {
  @action
  publishReview() {
    firebase.firestore().collection('reviews').add({
      title: this.title,
      description: this.description,
      starrating: this.starrating,
    });
  }
}
