import assign from 'object-assign';
import { ORDER_BY_DESC } from '../variables/variables';
import {
  REQUEST_ITEMS
} from '../actions/movie';

export default function getMovie(state = {
  items: []
}, action) {
  const { items, type } = action;

  switch (type) {
    case REQUEST_ITEMS:
      return assign({}, state, {
        items
      });
    default:
      return state;
  }
}
