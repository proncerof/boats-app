import React from 'react';
import BoatList from '../components/boat-list-component';
import CreateBoatComponent from '../components/create-boat-component';
import SearchComponent from '../components/search-component';

const BoatListPage = () => (
  <>
    <SearchComponent />
    <BoatList />
    <CreateBoatComponent />
  </>
);

export default BoatListPage;
