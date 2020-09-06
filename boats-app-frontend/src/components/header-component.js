import React from 'react';
import { bindActionCreators } from 'redux';
import { Menu, Container, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutAction } from '../actions/logout';

const HeaderComponent = ({ logout }) => (
  <Menu
    fixed="top"
    inverted
    size="large"
  >
    <Container>
      <Menu.Item position="right">
        <Button primary onClick={logout}>
          Log out
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
);

HeaderComponent.propTypes = {
  logout: PropTypes.func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    logout: logoutAction,
  }, dispatch),
});

export default connect(undefined, mapDispatchToProps)(HeaderComponent);
