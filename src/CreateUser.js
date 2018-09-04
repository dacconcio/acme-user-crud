import React from 'react';
import ListUsers from './ListUsers.js';

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textBox: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ textBox: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state.textBox);
  }

  render() {
    const { deleteFunc, users } = this.props;
    const { handleSubmit, onChange } = this;
    const { textBox } = this.state;

    return (
      <div>
        <ListUsers deleteFunc={deleteFunc} users={users} />
        <p />
        <h4> Add User: </h4>
        <form onSubmit={handleSubmit}>
          name:<br />
          <input onChange={onChange} type="text" value={textBox} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
