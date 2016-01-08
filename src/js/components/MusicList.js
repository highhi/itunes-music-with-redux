import React, { Component, PropTypes } from 'react';
import MusicItem from './MusicItem';

class MusicList extends Component {
  render() {
    return (
      <div className="list list-music">
        <div className="list__row">
          <div className="list__cell list__th is-button"></div>
          <div className="list__cell list__th is-cover">
            Cover
          </div>
          <div className="list__cell list__th is-track">
            Track
          </div>
          <div className="list__cell list__th is-artist">
            Artist
          </div>
          <div className="list__cell list__th is-collection">
            Collection
          </div>
          <div className="list__cell list__th is-trackPrice">
            Track Price
          </div>
          <div className="list__cell list__th is-collePrice">
            Collection Price
          </div>
        </div>
        { this.props.children }
      </div>
    );
  }
}

MusicList.propTypes = {
  children: PropTypes.array.isRequired
};

export default MusicList;
