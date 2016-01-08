import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>itunes music with Redux</h1>
        { this.props.children }
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Header;
