import Model, { attr } from '@ember-data/model';

export default class MoviesModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('string') starrating;
}
