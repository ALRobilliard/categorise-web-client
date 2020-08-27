import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Accounts from '../Accounts/Accounts';
import SignIn from '../SignIn/SignIn';

interface IProps {
  refreshUser: Function;
  user?: UserDto;
}

interface IState {}

class RouterView extends Component<IProps, IState> {
  state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.user == null && window.location.pathname != '/signin') {
      return (
        <Route
          path='/'
          render={(props) => (
            <SignIn {...props} refreshUser={this.props.refreshUser} />
          )}
        />
      );
    }

    return (
      <Switch>
        <Route
          path='/accounts'
          render={(props) => <Accounts {...props} user={this.props.user} />}
        />
        <Route
          path='/signin'
          render={(props) => (
            <SignIn {...props} refreshUser={this.props.refreshUser} />
          )}
        />
      </Switch>
    );
  }
}

export default RouterView;
