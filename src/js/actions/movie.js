import request from 'superagent';
import reqJsonp from 'superagent-jsonp';
import { ORDER_BY_DESC, ORDER_BY_ASC } from '../variables/variables';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';

function requestItems(items) {
  return {
    type: REQUEST_ITEMS,
    items
  };
}

export function fetch(keyword) {
  const api = `https://itunes.apple.com/search?term=${encodeURIComponent(keyword)}&media=movie&country=jp&lang=ja_jp&callback=JSON_CALLBACK`;

  return (dispatch, getState) => {
    const { orderMenu, sortMenu } = getState().getMusic;
    request.get(api).use(reqJsonp).timeout(10000).end((err, res) => {
      if (!err && res) {
        console.log(res.body.results);
        dispatch(requestItems(res.body.results));
      }
    });
  };
}

function sortItems(items, orderMenu, sortMenu) {
  return items.slice().sort((a, b) => {
    switch (orderMenu) {
      case ORDER_BY_ASC  : return (a[ sortMenu ] < b[ sortMenu ]) ? -1 : 1;
      case ORDER_BY_DESC : return (a[ sortMenu ] > b[ sortMenu ]) ? -1 : 1;
    }
  });
}

