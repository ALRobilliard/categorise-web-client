import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { postData } from '../../Helpers/utils';
import { Button, Container, Box } from '@material-ui/core';

interface IProps {
  refreshUser: Function;
}

interface IState {
  email: string;
  password: string;
  redirect: boolean;
}

class SignIn extends Component<IProps, IState> {
  state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
  }

  authUser = () => {
    postData(`${process.env.REACT_APP_BASE_API_URL}/api/users/authenticate`, {
      Email: this.state.email,
      Password: this.state.password,
    }).then((res) => {
      if (
        res.message != null &&
        res.message === 'Email or password is incorrect'
      ) {
        window.alert(res.message);
      } else {
        this.setSessionStorage(res);
        this.props.refreshUser();

        const state = this.state;
        this.setState({
          email: state.email,
          password: state.password,
          redirect: true,
        });
      }
    });
  };

  setSessionStorage = (user: UserDto) => {
    sessionStorage.setItem('userId', user.id);
    sessionStorage.setItem('userFirstName', user.firstName);
    sessionStorage.setItem('userLastName', user.lastName);
    sessionStorage.setItem('userEmail', user.email);
    sessionStorage.setItem('userToken', user.token);
  };

  emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ email: e.target.value });
  passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ password: e.target.value });

  render() {
    const redirect = this.state.redirect;

    if (redirect) {
      return <Redirect to='/' />;
    }

    return (
      <Container maxWidth='sm'>
        <Box my={4}>
          <form noValidate autoComplete='off'>
            <TextField
              id='email-input'
              label='Email'
              type='email'
              autoComplete='current-email'
              variant='filled'
              onChange={this.emailOnChange}
              fullWidth
            />
            <TextField
              id='password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              variant='filled'
              onChange={this.passwordOnChange}
              fullWidth
              margin='normal'
            />
            <Button
              id='log-in'
              variant='contained'
              color='primary'
              onClick={this.authUser}
            >
              Log in
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}

export default SignIn;
