import React from 'react';
import './Filters.css'
const Filters = ({ setChecked, checked }) => {

    const handle = () => {
        const checkedIt = document.querySelector('input[type="checkbox"]:checked');
        setChecked(checkedIt?.value);
    }
    return (
        <div className='filters fw-500'>
            <label htmlFor="delivered">
                <input type="checkbox" onChange={() => handle()} name='delivered' value='Delivered' />
                Delivered
            </label>
            <label htmlFor="completed">
                <input type="checkbox" onChange={() => handle()} name='completed' value='Completed' />
                Completed
            </label>
            <label htmlFor="prepared">
                <input type="checkbox" onChange={() => handle()} name='prepared' value='Prepared' />
                Prepared
            </label>
            <label htmlFor="prepone">
                <input type="checkbox" onChange={() => handle()} name='prepone' value='Prepone' />
                Prepone
            </label>
        </div>
    );
};

export default Filters;