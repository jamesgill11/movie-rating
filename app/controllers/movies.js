import Controller from '@ember/controller';
import { action } from '@ember/object';
import firebase from 'firebase';

export default class MoviesController extends Controller {
  @action
  publishMovie() {
    firebase.firestore().collection('movies').add({
      title: this.title,
      description: this.description,
    });
  }
}
