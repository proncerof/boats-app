import React, { useState } from 'react';
import {
  Button, Form, Grid, Header, Segment,
} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NotificationManager } from 'react-notifications';
import { Redirect } from 'react-router';
import { loginAction } from '../actions/login';

const LoginPage = ({ login, isAuthenticated }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  if (isAuthenticated) {
    return <Redirect to="/boats" />;
  }

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="User name"
              onChange={(event, { value }) => setUsername(value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(event, { value }) => setPassword(value)}
            />
            <Button
              primary
              fluid
              size="large"
              onClick={() => {
                login({ username, password }).then(
                  ({ error }) => {
                    if (!error) {
                      NotificationManager.success('You are successfully logged in.', 'Success!');
                    } else { NotificationManager.error('Incorrect username or password.', 'Error!'); }
                  },
                );
              }}
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    login: loginAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
