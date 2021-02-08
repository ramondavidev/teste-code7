import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { deleteDebt } from '../../redux/customer/customer.actions';

import './debt-styles.scss';


const DebtCard = ({ debt: {customerId , amount, reason, _id, relatedCustomerId }, deleteDebt, debtPage }) => {

    return (
        <div className='debt-card'>
            <div>Id da dívida: {customerId}</div>
            <div>Divida do cliente com Id: <strong>{relatedCustomerId}</strong></div>
            <div>Quantia: <strong>{`${amount} R$`}</strong></div>
            <div>Motivo: {reason}</div>
            
            <div className='container-icons'>
                <Link style={{color: 'white'}} to={`/edit/${_id}`}><div className='container-edit'><i className="far fa-edit"></i></div></Link>
                <div className='container-delete'  onClick={() => deleteDebt(_id, debtPage)}><i className="far fa-trash-alt"></i></div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    customers: state.customer
});

export default connect(mapStateToProps, { deleteDebt })(DebtCard);