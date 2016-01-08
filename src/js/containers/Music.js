import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom'
import { connect } from 'react-redux';
import Header from '../components/Header';
import MusicSort from '../components/MusicSort';
import Search from '../components/Search';
import MusicList from '../components/MusicList';
import MusicItem from '../components/MusicItem';
import * as musicActions from '../actions/music';

class Music extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    const { getMusic, playMusic } = this.props;
    return getMusic.items.map((item, i) => {
      return(
        <MusicItem
          item = { item }
          previewUrl = { getMusic.previewUrl }
          playMusic = { playMusic }
          index = { i }
          key = { i } />
      );
    });
  }

  render() {
    const {
      sortItemsInOrderMenu,
      sortItemsInSortMenu,
      fetch,
      getMusic
    } = this.props;
    
    return (
      <div>
        <Header>
          <Search fetch = { fetch } />
          <MusicSort
            orderMenu = { getMusic.orderMenu }
            sortMenu = { getMusic.sortMenu } 
            sortItemsInOrderMenu = { sortItemsInOrderMenu }
            sortItemsInSortMenu = { sortItemsInSortMenu } />
        </Header>
        <MusicList>
          { this.renderItems() }
        </MusicList>
        <audio src={ getMusic.previewUrl } autoPlay></audio>
      </div>
    );
  }
}

Music.propTypes = {
  getMusic: PropTypes.shape({
    items: PropTypes.array.isRequired,
    orderMenu: PropTypes.string.isRequired,
    sortMenu: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired
  }),
  sortItemsInOrderMenu: PropTypes.func.isRequired,
  sortItemsInSortMenu: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  playMusic: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { getMusic } = state;
  return {
    getMusic
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(musicActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);
