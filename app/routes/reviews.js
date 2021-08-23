import Route from '@ember/routing/route';
import firebase from 'firebase';

export default class ReviewsRoute extends Route {
  async model() {
    const reviews = await firebase
      .firestore()
      .collection('reviews')
      .doc('xZihYC382ced2u3rk8wE');

    reviews
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('Document data', doc.data());
          const review = doc.data();
          console.log(review);
          return review;
        } else {
          console.log('no such data');
        }
      })
      .catch((error) => {
        console.log('error getting doc', error);
      });
  }
}
