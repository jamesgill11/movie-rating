import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'movierating/config/environment';
import firebase from 'firebase/app';
import 'firebase/firestore';
export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCkjRMKYdXeXyc07tPmh47ogM8d7eJeY_M',
  authDomain: 'clarus-movie-rating.firebaseapp.com',
  projectId: 'clarus-movie-rating',
  storageBucket: 'clarus-movie-rating.appspot.com',
  messagingSenderId: '592502336706',
  appId: '1:592502336706:web:a12b7824924bd8c91e9f5b',
};
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
firebase.firestore();

loadInitializers(App, config.modulePrefix);
