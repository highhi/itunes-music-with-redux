import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { render } from 'react-dom'
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import MovieList from '../components/MovieList';
import MovieItem from '../components/MovieItem';
import * as movieActions from '../actions/movie';

class Movie extends Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    const { items } = this.props.getMovie;
    return items.map((item, i) => {
      return(
        <MovieItem
          item = { item }
          index = { i }
          key = { i } /
        >
      );
    });
  }

  render() {
    const { fetch } = this.props;
    return (
      <div>
        <Header>
          <Search fetch = { fetch } />
        </Header>
        <MovieList>
          { this.renderItems() }
        </MovieList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { getMovie } = state;
  return {
    getMovie
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(movieActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
