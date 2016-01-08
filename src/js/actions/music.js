import request from 'superagent';
import jsonp from 'superagent-jsonp';
import { ORDER_BY_DESC, ORDER_BY_ASC } from '../variables/variables';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const CHANGE_ORDER_MENU = 'CHANGE_ORDER_MENU';
export const CHANGE_SORT_MENU = 'CHANGE_SORT_MENU';
export const CLICKED_PLAY_BUTTON = 'CLICKED_PLAY_BUTTON';

function requestItems(items) {
  return {
    type: REQUEST_ITEMS,
    items
  };
}

function changeOrderMenu(items, orderMenu) {
  return {
    type: CHANGE_ORDER_MENU,
    items,
    orderMenu
  };
}

function changeSortMenu(items, sortMenu) {
  return {
    type: CHANGE_SORT_MENU,
    items,
    sortMenu
  };
}

export function playMusic(previewUrl) {
  return {
    type: CLICKED_PLAY_BUTTON,
    previewUrl
  };
}

export function sortItemsInOrderMenu(orderMenu) {
  return (dispatch, getState) => {
    const { sortMenu, items } = getState().getMusic;
    const sortedItems = sortItems(items, orderMenu, sortMenu);
    dispatch(changeOrderMenu(sortedItems, orderMenu));
  }
}

export function sortItemsInSortMenu(sortMenu) {
  return (dispatch, getState) => {
    const { orderMenu, items } = getState().getMusic;
    const sortedItems = sortItems(items, orderMenu, sortMenu);
    dispatch(changeSortMenu(sortedItems, sortMenu));
  }
}

export function fetch(keyword, category = '') {
  const api = `https://itunes.apple.com/search?term=${encodeURIComponent(keyword)}&media=music&attribute=${category}&country=jp&lang=ja_jp&callback=JSON_CALLBACK`;

  return (dispatch, getState) => {
    const { orderMenu, sortMenu } = getState().getMusic;
    request.get(api).use(jsonp).timeout(10000).end((err, res) => {
      if (!err && res) {
        console.log(res.body.results);
        const sortedItems = sortItems(res.body.results, orderMenu, sortMenu);
        dispatch(requestItems(sortedItems));
      }
    });
  };
}

function sortItems(items, orderMenu, sortMenu) {
  return items.slice().sort((a, b) => {
    if (orderMenu === ORDER_BY_ASC) {
      return (a[ sortMenu ] < b[ sortMenu ]) ? -1 : 1;
    }
    return (a[ sortMenu ] > b[ sortMenu ]) ? -1 : 1;
  });
}

