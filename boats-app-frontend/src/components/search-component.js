import React, { useState } from 'react';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setGetAllBoatsQueryAction } from '../actions/set-get-all-boats-query';

const WAIT_INTERVAL = 250;
let timer = null;

const SearchComponent = ({ search, setGetAllBoatsQuery }) => {
  const [inputValue, setInputValue] = useState(search);

  const onSearchValueChange = (e, { value }) => {
    clearTimeout(timer);

    setInputValue(value);

    timer = setTimeout(
      () => setGetAllBoatsQuery({ search: value }),
      WAIT_INTERVAL,
    );
  };

  return (
    <Search
      open={false}
      value={inputValue}
      onSearchChange={onSearchValueChange}
    />
  );
};

SearchComponent.propTypes = {
  search: PropTypes.string.isRequired,
  setGetAllBoatsQuery: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.boatList.query.search,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    setGetAllBoatsQuery: setGetAllBoatsQueryAction,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
