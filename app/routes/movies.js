import Route from '@ember/routing/route';
import firebase from 'firebase';

export default class MovieRoute extends Route {
  async model() {
    await firebase
      .firestore()
      .collection('movies')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' = ', doc.data());
        });
      });
    // const movies = await firebase
    //   .firestore()
    //   .collection('movies')
    //   .doc('ghostbusters');

    // await movies
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log('Document data', doc.data());
    //       const singlemovie = doc.data();
    //       let { id, type, attributes } = singlemovie.data;
    //       console.log(singlemovie.data);

    //       return { id, type, attributes };
    //     } else {
    //       console.log('no such data');
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('error getting doc', error);
    //   });
  }
}
