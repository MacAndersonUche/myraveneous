/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar({searchYelp}) {
    const [term, setTerm] = useState("")
    const [location, setLocation] = useState("")
    const [sortBy, setSortBy] = useState("best_match")

        const sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    

    function getSortByClass(sortByOption) {
        if (sortBy === sortByOption) {
            return 'active';
        }
        return '';
    }

    function handleSortByChange(sortByOption) {
        setSortBy(sortByOption );
    }

    function handleTermChange(event) {
        setTerm(event.target.value);
    }

    function handleLocationChange(event) {
        setLocation(event.target.value);
    }

    function handleSearch(event) {
        searchYelp(term,location,sortBy);

        event.preventDefault();
    }



    function renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (<li className={getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}
                onClick={() => handleSortByChange(sortByOptionValue)}>
                {sortByOption}
            </li>);
        });
    }


        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={handleTermChange} />
                    <input placeholder="Where?" onChange={handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    
}

export default SearchBar;