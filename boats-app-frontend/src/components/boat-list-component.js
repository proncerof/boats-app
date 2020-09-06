import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Dropdown, Pagination } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationManager } from 'react-notifications';
import { withRouter } from 'react-router';
import { getAllBoatsAction } from '../actions/get-all-boats';
import UpdateBoatComponent from './update-boat-component';
import { deleteBoatAction } from '../actions/delete-boat';
import { setGetAllBoatsQueryAction } from '../actions/set-get-all-boats-query';

const BoatList = ({
  boats, getAllBoats, deleteBoat, history, totalPages, setGetAllBoatsQuery, query,
}) => {
  useEffect(() => {
    getAllBoats(query);
  }, [query]);

  const onDeleteBoat = (boatId) => {
    deleteBoat(boatId).then(({ error }) => {
      if (!error) {
        NotificationManager.success('The boat has been successfully deleted.', 'Success!');
        getAllBoats();
      } else { NotificationManager.error('An error has occurred while deleting the boat.', 'Error!'); }
    });
  };

  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {boats.map((boat) => (
          <Table.Row onClick={() => history.push(`/boats/${boat.id}`)}>
            <Table.Cell>{boat.id}</Table.Cell>
            <Table.Cell>{boat.name}</Table.Cell>
            <Table.Cell>
              {boat.description}
            </Table.Cell>
            <Table.Cell>
              <Dropdown icon="ellipsis vertical" className="icon">
                <Dropdown.Menu>
                  <UpdateBoatComponent boat={boat} />
                  <Dropdown.Item
                    icon="trash"
                    text="Delete"
                    onClick={() => onDeleteBoat(boat.id)}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Dropdown
              selection
              value={query.size}
              onChange={(event, { value }) => setGetAllBoatsQuery({ size: value })}
              options={[
                { key: 5, value: 5, text: 5 },
                { key: 10, value: 10, text: 10 },
                { key: 25, value: 25, text: 25 },
              ]}
              style={{
                float: 'right', minWidth: '60px', height: '42px', marginLeft: '10px',
              }}
            />
            <Pagination
              defaultActivePage={1}
              activePage={query.page}
              onPageChange={(event, { activePage }) => setGetAllBoatsQuery({
                page: activePage,
              })}
              siblingRange={1}
              totalPages={totalPages}
              style={{ float: 'right', height: '42px' }}
            />

          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

BoatList.propTypes = {
  boats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  getAllBoats: PropTypes.func.isRequired,
  deleteBoat: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  totalPages: PropTypes.number.isRequired,
  setGetAllBoatsQuery: PropTypes.func.isRequired,
  query: PropTypes.shape({
    page: PropTypes.number,
    size: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  boats: state.boatList.boats,
  totalPages: state.boatList.totalPages,
  query: state.boatList.query,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getAllBoats: getAllBoatsAction,
    setGetAllBoatsQuery: setGetAllBoatsQueryAction,
    deleteBoat: deleteBoatAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BoatList));
