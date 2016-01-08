import React, { Component, PropTypes } from 'react';
import MusicItem from './MusicItem';

class MovieList extends Component {
  render() {
    return (
      <div className="list list-movie">
        { this.props.children }
      </div>
    );
  }
}

export default MovieList;
