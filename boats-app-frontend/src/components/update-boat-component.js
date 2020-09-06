import React, { useState } from 'react';
import { Modal, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationManager } from 'react-notifications';
import BoatForm from './boat-form-component';
import { updateBoatAction } from '../actions/update-boat';
import { getAllBoatsAction } from '../actions/get-all-boats';

const UpdateBoatComponent = ({
  boat, updateBoat, getAllBoats, query,
}) => {
  const [modalOpen, setModelOpen] = useState(false);

  const onUpdateBoat = (boatToUpdate) => {
    updateBoat(boatToUpdate).then(
      ({ error }) => {
        if (!error) {
          NotificationManager.success('The boat has been successfully updated.', 'Success!');
          getAllBoats(query);
          setModelOpen(false);
        } else { NotificationManager.error('An error has occurred while updating the boat.', 'Error!'); }
      },
    );
  };

  return (
    <Modal
      trigger={<Dropdown.Item icon="edit" text="Edit" onClick={() => setModelOpen(true)} />}
      open={modalOpen}
      onClose={() => setModelOpen(false)}
    >
      <Modal.Header>
        Update Boat
        {' '}
        {boat.id}
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <BoatForm boat={boat} onSubmit={onUpdateBoat} />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

UpdateBoatComponent.propTypes = {
  boat: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  updateBoat: PropTypes.func.isRequired,
  getAllBoats: PropTypes.func.isRequired,
  query: PropTypes.shape({
    page: PropTypes.number,
    size: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  query: state.boatList.query,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    updateBoat: updateBoatAction,
    getAllBoats: getAllBoatsAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBoatComponent);
