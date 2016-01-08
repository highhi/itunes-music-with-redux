import assign from 'object-assign';
import { ORDER_BY_DESC } from '../variables/variables';
import {
  REQUEST_ITEMS,
  CHANGE_ORDER_MENU,
  CHANGE_SORT_MENU,
  CLICKED_PLAY_BUTTON
} from '../actions/music';

export default function getMusic(state = {
  items: [],
  orderMenu: ORDER_BY_DESC,
  sortMenu: 'trackName',
  previewUrl: '#'
}, action) {
  const { items, orderMenu, sortMenu, previewUrl, trackId, type } = action;

  switch (type) {
    case REQUEST_ITEMS:
      return assign({}, state, {
        items
      });
    case CHANGE_ORDER_MENU:
      return assign({}, state, {
        items,
        orderMenu
      });
    case CHANGE_SORT_MENU:
      return assign({}, state, {
        items,
        sortMenu
      });
    case CLICKED_PLAY_BUTTON:
      return assign({}, state, {
        previewUrl
      });
    default:
      return state;
  }
}
