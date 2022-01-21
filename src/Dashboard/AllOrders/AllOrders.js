import React, { useEffect, useState } from 'react';
import './AllOrders.css'
import Order from './Order/Order';

const AllOrders = ({ searchTerm, checked }) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Ved-X/assignment/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const sortedOrders = orders.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

    return (
        <div>
            <table className='order-list'>
                <thead className='t-heade'>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Product</th>
                        <th>Placed Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedOrders.filter((val) => {
                            if (val === "") {
                                return val;
                            } else if (val.customer.toLocaleLowerCase().includes(searchTerm)) {
                                return val;
                            }
                        }).filter((val) => {
                            if (val === "") {
                                return val;
                            } else if (val.status.includes(checked)) {
                                return val;
                            }
                        }).map(order => <Order
                            key={order.order_id}
                            order={order}
                        ></Order>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;