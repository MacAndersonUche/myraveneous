import React, {useState} from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList.tsx';
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

function App() {
 
  const [business, setBusiness] = useState([])


  function searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
     setBusiness(businesses)
    });
  }

 
    return (
      <div className="App">
        <h1>Mac's Business Finder</h1>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={business} />
      </div>
    );
  
}

export default App;