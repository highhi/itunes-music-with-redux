import React, { Component, PropTypes } from 'react';
import { ORDER_BY_DESC, ORDER_BY_ASC } from '../variables/variables';

class MusicSort extends Component {
  constructor(props) {
    super(props);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
  }

  handleChangeSelect(e) {
    this.props.sortItemsInSortMenu(e.target.value);
  }

  handleChangeRadio(e) {
    this.props.sortItemsInOrderMenu(e.target.value);
  }

  render() {
    const { orderMenu, sortMenu } = this.props;

    return (
      <div className="sort">
        <span className="sort__label" >Sort by </span>
        <select className="sort__select field animate-shadow" value={ sortMenu } onChange = { this.handleChangeSelect }>
          <option value="trackName">Track</option>
          <option value="artistName">Artist</option>
          <option value="collectionName">Collection</option>
          <option value="trackPrice">Track Price</option>
          <option value="collectionPrice">Collection Price</option>
        </select>
        <div className="switch">
          <label className="switch__item">
            <input type="radio" name="order" value={ ORDER_BY_DESC } defaultChecked onChange = { this.handleChangeRadio } /> Descending
          </label>
          <label className="switch__item">
            <input type="radio" name="order" value={ ORDER_BY_ASC } onChange = { this.handleChangeRadio } /> Ascending
          </label>
        </div>
      </div>
    );
  }
}

MusicSort.propTypes = {
  orderMenu: PropTypes.string.isRequired,
  sortMenu: PropTypes.string.isRequired,
  sortItemsInOrderMenu: PropTypes.func.isRequired,
  sortItemsInSortMenu: PropTypes.func.isRequired,
};

export default MusicSort;
