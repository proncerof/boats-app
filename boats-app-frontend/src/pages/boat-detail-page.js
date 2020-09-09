import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import { getBoatByIdAction } from '../actions/get-boat-by-id';
import { NotificationManager } from 'react-notifications';

const BoatDetailPage = ({
  boat, getBoatById, match, history,
}) => {
  useEffect(() => {
    getBoatById(match.params.id).then(
      ({ error }) => {
        if (error) {
          NotificationManager.error('Boat does not exist.', 'Error!');
        }
      },
    );
  }, [match.params.id]);
  return (
    <>
      <Icon onClick={() => history.goBack()} name="arrow left" />
      <Header as="h1">
        {boat.name}
      </Header>
      <p>{boat.description}</p>
    </>
  );
};

BoatDetailPage.propTypes = {
  boat: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  getBoatById: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  boat: state.selectedBoat.boat,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getBoatById: getBoatByIdAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BoatDetailPage));
