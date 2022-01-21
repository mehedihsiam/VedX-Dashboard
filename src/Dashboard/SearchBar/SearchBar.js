import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({ setSearchterm, setFilterOpen, filterOpen }) => {
    const reset = () => {
        document.getElementById('search-value').value = "";
    }

    const handleFilterOpen = () => {
        if (!filterOpen) {
            setFilterOpen(true)
        } else {
            setFilterOpen(false)
        }
    }
    return (
        <div className='search-container'>
            <div className='searchbar'>
                <input
                    id='search-value'
                    type="text"
                    className='input'
                    placeholder='Search by Customer Name'
                    onChange={(e) => setSearchterm(e.target.value.toLocaleLowerCase())}
                />
                <div className='cross' onClick={() => { reset() }}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
            <div className="filter">
                <button className='filter-btn' onClick={() => handleFilterOpen()}>
                    <FontAwesomeIcon icon={faSortAmountDown} />
                    Filter
                </button>
            </div>
        </div>
    );
};

export default SearchBar;