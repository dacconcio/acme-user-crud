import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

export default function ListUsers(props) {
  return (
    <div>
      {props.users.map(user => {
        return (
          <div key={user.id}>
            <Link to={{pathname: `/users/update/${user.id}`, state: user }}>{user.name}</Link>

            <div
              onClick={() => props.deleteFunc(user.id)}
              style={{ display: 'inline' }}
            >
                        X
            </div>
          </div>
        );
      })}
    </div>
  );
}
