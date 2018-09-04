import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { HashRouter, Link, Route } from 'react-router-dom';
import Nav from './Nav.js';
import CreateUser from './CreateUser.js';
import UpdateUser from './UpdateUser.js';
import ListUsers from './ListUsers.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    };

    this.deleteUser = this.deleteUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  deleteUser(id) {
    axios
      .delete(`/api/users/${id}`)
      .then(() => {
        const updatedUsers = this.state.users.filter(user => {
          return id !== user.id;
        });
        this.setState({ users: updatedUsers });
      })

      .then(() => console.log('gone!'));
  }

  createUser(userName) {
    axios
      .post('/api/users/', {
        user: userName
      })
      .then(response => {
        const newUsers = this.state.users;
        newUsers.push(response.data);
        this.setState({ users: newUsers });
      })
      .catch(err => console.log(err));
  }

  updateUser(user) {
    axios
      .put('/api/users/', {
        user
      })
      .then(response => {
        const allUsers = this.state.users;
        allUsers[user.id - 1] = user;
        console.log(allUsers);
        this.setState({ users: allUsers });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    axios.get('/api/users').then(response => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { deleteUser, updateUser, createUser } = this;
    const { users } = this.state;

    return (
      <div>
        <h2> Welcome. We have {users.length} users! </h2>

        <HashRouter>
          <div>
            <Route
              path="/"
              render={({ history }) => <Nav history={history} />}
            />

            <Route
              exact
              path="/users"
              render={() => (
                <ListUsers deleteFunc={deleteUser} users={users} />
              )}
            />
            <Route
              exact
              path="/users/create"
              render={() => (
                <CreateUser
                  deleteFunc={deleteUser}
                  createUser={createUser}
                  users={users}
                />
              )}
            />
            <Route
              exact
              path="/users/update/:id"
              render={props => (
                <UpdateUser
                  {...props}
                  deleteFunc={deleteUser}
                  users={users}
                  updateUser={updateUser}
                />
              )}
            />
          </div>
        </HashRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


