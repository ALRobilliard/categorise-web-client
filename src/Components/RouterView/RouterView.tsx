import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../SignIn/SignIn';

interface IProps {
  refreshUser: Function;
  user?: object;
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
