import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | movie rating', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Movie Ratings!');

    assert.dom('.header a.button').hasText('Add Movie');
    await click('.header a.button');

    assert.equal(currentURL(), '/movies');
  });

  test('visiting /movies', async function (assert) {
    await visit('/movies');

    assert.equal(currentURL(), '/movies');
    assert.dom('h2').hasText('Add New Movie!');

    assert.dom('.movie-form input').exists();
    assert.dom('.movie-form textarea').exists();
  });

  test('visiting /reviews', async function (assert) {
    await visit('/reviews');

    assert.equal(currentURL(), '/reviews');
    assert.dom('h2').hasText('Add New Review!');

    assert.dom('.movie-form input').exists();
    assert.dom('.movie-form textarea').exists();
  });
});
