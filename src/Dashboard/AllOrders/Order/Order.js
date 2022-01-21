import React from 'react';
import './Order.css'

const Order = ({ order }) => {
    const { order_id, customer, country, address, product_title, product_description, date, status } = order;

    return (
        <tr>
            <td>#ON0{order_id}</td>
            <td>{customer}</td>
            <td>{country} <br /> <small>{address}</small></td>
            <td>{product_title} <br /> <small>{product_description} </small> </td>
            <td>{date} </td>
            <td> <span className={`${status} fw-500 background`}>{status}</span></td>
        </tr >
    );
};

export default Order;