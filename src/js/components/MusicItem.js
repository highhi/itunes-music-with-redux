import React, { Component, PropTypes } from 'react';

class MusicItem extends Component {
  constructor(props) {
    super(props);
    this.handlePlayMusic = this.handlePlayMusic.bind(this);
  }

  handlePlayMusic(e) {
    e.preventDefault();
    const { item, previewUrl, playMusic } = this.props;
    playMusic(previewUrl === item.previewUrl ? '#' : item.previewUrl);
  }

  render() {
    const { item, index, previewUrl } = this.props;

    return (
      <div className={ index % 2 === 0 ? 'list__row is-even' : 'list__row' }>
        <div className="list__cell list__td is-button">
          <button className="list__button" onClick = { this.handlePlayMusic } >
            { previewUrl === item.previewUrl ? '■' : '▶︎' }
          </button>
        </div>
        <div className="list__cell list__td is-cover">
          <img src={ item.artworkUrl60 } width="" height="" alt="" />
        </div>
        <div className="list__cell list__td is-track">{ item.trackName }</div>
        <div className="list__cell list__td is-artist">{ item.artistName }</div>
        <div className="list__cell list__td is-collection">{ item.collectionName }</div>
        <div className="list__cell list__td is-trackPrice">{ item.trackPrice }</div>
        <div className="list__cell list__td is-collePrice">{ separate(item.collectionPrice) }</div>
      </div>
    );
  }
}

MusicItem.propTypes = {
  index: PropTypes.number.isRequired,
  playMusic: PropTypes.func.isRequired,
  previewUrl: PropTypes.string.isRequired,
  item: PropTypes.shape({
    artworkUrl60: PropTypes.string,
    trackName: PropTypes.string,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    trackPrice: PropTypes.number,
    previewUrl: PropTypes.string
  })
};

function separate(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

export default MusicItem;
