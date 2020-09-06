import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BoatListPage from './boat-list-page';
import BoatDetailPage from './boat-detail-page';
import HeaderComponent from '../components/header-component';

const MainPage = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <HeaderComponent />
      <Segment style={{ width: '900px', margin: 'auto', marginTop: 100 }}>
        <Route exact path="/boats" component={BoatListPage} />
        <Route path="/boats/:id" component={BoatDetailPage} />
      </Segment>

    </>
  );
};

MainPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated,
});

export default connect(mapStateToProps, undefined)(MainPage);
