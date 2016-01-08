import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.category = '';
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const el = findDOMNode(this.refs.keyword);
    const keyword = el.value.trim();

    if (!keyword) return;

    this.props.fetch(keyword, this.category);
  }

  handleFocus(e) {
    setTimeout(() => {
      e.target.select();
    }, 0);
  }

  handleChange(e) {
    this.category = e.target.value;
  }

  render() {
    return (
      <form onSubmit = { this.handleSubmit } >
        <div className="search">
          <input className="search__text field animate-shadow" type="text" placeholder="Search" ref="keyword" onFocus = { this.handleFocus } />
          <div className="switch">
            <label className="switch__item">
              <input type="radio" name="category" value="" defaultChecked onChange = { this.handleChange } /> All
            </label>
            <label className="switch__item">
              <input type="radio" name="category" value="artistTerm" onChange = { this.handleChange } /> Artist
            </label>
            <label className="switch__item">
              <input type="radio" name="category" value="songTerm" onChange = { this.handleChange } /> Track
            </label>
            <label className="switch__item">
              <input type="radio" name="category" value="albumTerm" onChange = { this.handleChange } /> Collection
            </label>
          </div>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  fetch: PropTypes.func.isRequired
};

export default Search;
