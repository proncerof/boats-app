import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const BoatForm = ({ boat, onSubmit }) => {
  const [name, setName] = useState(boat.name);
  const [description, setDescription] = useState(boat.description);

  return (
    <Form
      onSubmit={() => onSubmit({ id: boat.id, name, description })}
    >
      {boat.id && (
      <Form.Input
        label="ID"
        placeholder="Boat id"
        value={boat.id}
        disabled
      />
      )}
      <Form.Input
        label="Boat name"
        placeholder="Boat name"
        value={name}
        onChange={(e, { value }) => setName(value)}
      />
      <Form.TextArea
        label="Boat description"
        placeholder="Boat description"
        value={description}
        onChange={(e, { value }) => setDescription(value)}
      />
      <Button type="submit" primary>Submit</Button>
    </Form>
  );
};

BoatForm.defaultProps = {
  boat: {
    id: undefined,
    name: '',
    description: '',
  },
};

BoatForm.propTypes = {
  boat: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default BoatForm;
