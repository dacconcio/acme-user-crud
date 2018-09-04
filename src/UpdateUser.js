import React from 'react';
import ListUsers from './ListUsers.js';

export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textBox: '',
      currentUser: null
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

    const userToUpdate = this.props.location.state;
    userToUpdate.name = this.state.textBox;
    this.props.updateUser(userToUpdate);
  }

  componentDidMount() {
    this.setState({ currentUser: this.props.location.state });
    this.setState({ textBox: this.props.location.state.name });
  }
  componentDidUpdate() {
    if (this.props.location.state !== this.state.currentUser) {
      this.setState({ currentUser: this.props.location.state });
      this.setState({ textBox: this.props.location.state.name });
    }
  }

  render() {
    const { deleteFunc, users } = this.props;
    const { handleSubmit, onChange } = this;
    const { textBox } = this.state;

    return (
      <div>
        <ListUsers
          deleteFunc={deleteFunc}
          users={users}
        />

        <h4>Update User:</h4>
        <form onSubmit={handleSubmit}>
          Name:<br />
          <input
            onChange={onChange}
            type="text"
            value={textBox}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
