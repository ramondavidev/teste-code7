import React, { Fragment } from 'react';

import './customer-card.styles.scss';

const CustomerCard = ({ customer }) => {
    return (
        <Fragment>
            <div className='card'>
                <div><strong>Id:</strong> {customer.id}</div>
                <div><strong>Nome:</strong> {customer.name}</div>
                <div><strong>Email:</strong> {customer.email}</div>
            </div>
        </Fragment>
    )
}

export default CustomerCard;