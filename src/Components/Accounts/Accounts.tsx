import React, { Component } from 'react';
import { getData, deleteData } from '../../Helpers/utils';

interface IProps {
  user?: UserDto;
}

interface IState {
  accounts: AccountDto[];
}

export default class Accounts extends Component<IProps, IState> {
  state: IState;
  _isMounted = false;
  _baseUrl = process.env.REACT_APP_BASE_API_URL;

  constructor(props: IProps) {
    super(props);
    this.state = {
      accounts: [],
    };
  }

  retrieveAccounts = () => {
    const token = this.props.user != null ? this.props.user.token : '';
    getData(`${this._baseUrl}/api/accounts`, token).then(
      (res: AccountDto[]) => {
        if (this._isMounted) {
          this.setState({
            accounts: res,
          });
        }
      }
    );
  };

  deleteAccount = (accountId: string, accountName: string) => {
    const deleteConfirmed = window.confirm(
      `Are you sure you want to delete account '${accountName}'`
    );
    if (deleteConfirmed) {
      const token = this.props.user != null ? this.props.user.token : '';
      deleteData(`${this._baseUrl}/api/accounts/${accountId}`, token).then(
        (res) => {
          this.retrieveAccounts();
        }
      );
    }
  };

  componentWillMount() {
    this._isMounted = true;
    this.retrieveAccounts();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <h1>Accounts</h1>
      </div>
    );
  }
}
