import React, { Component, PropTypes } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, index } = this.props;

    return (
      <div className={ index % 2 === 0 ? 'list__row is-even' : 'list__row' }>
        <div className="list__cell">artistName: { item.artistName }</div>
        <div className="list__cell"><img src={ item.artworkUrl100 } width="" height="" alt=""/></div>
        <div className="list__cell">collectionPrice: { item.collectionPrice }</div>
        <div className="list__cell">longDescription: { item.longDescription }</div>
        <div className="list__cell">primaryGenreName: { item.primaryGenreName }</div>
        <div className="list__cell">releaseDate: { item.releaseDate }</div>
        <div className="list__cell">trackName: { item.trackName }</div>
      </div>
    );
  }
}

function separate(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

export default MovieItem;
