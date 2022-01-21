import React, { useState } from 'react';
import TopBar from './TopBar/TopBar';
import './Dashboard.css'
import SearchBar from './SearchBar/SearchBar';
import AllOrders from './AllOrders/AllOrders';
import Filters from './Filters/Filters';

const Dashboard = () => {
    const [searchTerm, setSearchterm] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [checked, setChecked] = useState('');
    return (
        <div className='dashboard'>
            <TopBar />
            <SearchBar
                setSearchterm={setSearchterm}
                setFilterOpen={setFilterOpen}
                filterOpen={filterOpen}
            />
            {filterOpen && <Filters
                setChecked={setChecked}
                checked={checked}
            />}
            <AllOrders
                searchTerm={searchTerm}
                checked={checked}
            />
        </div>
    );
};

export default Dashboard;