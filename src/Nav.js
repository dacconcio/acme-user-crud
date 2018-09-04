import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.props.history.push(page);
  }

  render() {
    return (
      <div className="navBar">
        <button name="home" onClick={() => this.changePage('/')}>
          {' '}
          Home{' '}
        </button>
        <button name="users" onClick={() => this.changePage('/users')}>
          {' '}
          Users{' '}
        </button>
        <button name="add" onClick={() => this.changePage('/users/create')}>
          {' '}
          Add a User
        </button>
      </div>
    );
  }
}
