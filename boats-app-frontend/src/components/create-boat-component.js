import React, { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import BoatForm from './boat-form-component';
import { createBoatAction } from '../actions/create-boat';
import { getAllBoatsAction } from '../actions/get-all-boats';

const CreateBoatComponent = ({
  createBoat, getAllBoats, query,
}) => {
  const [modalOpen, setModelOpen] = useState(false);

  const onCreateBoat = (boat) => {
    createBoat(boat).then(
      ({ error }) => {
        if (!error) {
          NotificationManager.success('The boat has been successfully created.', 'Success!');
          getAllBoats(query);
          setModelOpen(false);
        } else { NotificationManager.error('An error has occurred while creating the boat.', 'Error!'); }
      },
    );
  };

  return (
    <Modal
      trigger={<Button primary onClick={() => setModelOpen(true)}>Add boat</Button>}
      open={modalOpen}
      onClose={() => setModelOpen(false)}
    >
      <Modal.Header>Add Boat</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <BoatForm onSubmit={onCreateBoat} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

CreateBoatComponent.propTypes = {
  createBoat: PropTypes.func.isRequired,
  getAllBoats: PropTypes.func.isRequired,
  query: PropTypes.shape({
    page: PropTypes.number,
    size: PropTypes.number,
    search: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  query: state.boatList.query,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    createBoat: createBoatAction,
    getAllBoats: getAllBoatsAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoatComponent);
