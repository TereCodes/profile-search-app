import React, { useState } from 'react'
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import { dataList } from './components/UserProfile';
import './App.css';

const App = () => {
  const [userDetails] = useState(dataList);
  const [searchQuery, setSearchQuery] = useState(dataList);
  console.log(dataList);

  return (
    <div className="app">
      <SearchBar userDetails={userDetails} setSearchQuery={setSearchQuery} />
      <UserProfile searchQuery={searchQuery} />
    </div>
  )
}

export default App;
