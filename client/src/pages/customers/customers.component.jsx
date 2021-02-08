import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUsers, uploadUsers } from '../../redux/customer/customer.actions';

import CustomerCard from '../../components/customer-card/customer-card.component';

import './customers.styles.scss';


const Customers = ({ customers: { customers }, getUsers, uploadUsers }) => {
    useEffect(() => {
        getUsers();
      }, [getUsers]);

    return (
        <div className='customers margin-t80'>
            <h1>Página de clientes</h1>
            {
                customers && !customers.length > 0 && (
                    <div>
                        <h3>Click no botão abaixo para cadastrar os 10 usuários do <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a> no banco de dados</h3>
                        <button onClick={() => uploadUsers()}>Adicionar usuário no DB</button>
                    </div>
                )
            }
            
            {
                customers && customers.length > 0  ? customers.map(customer => (
                    <Link key={customer.id} className='link' to={`/${customer.id}`}><CustomerCard key={customer.id} customer={customer} /></Link>
                ))
                : 
                <div>
                    <h2>Não há usuários cadastrados no DB</h2>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    customers: state.customer
});

export default connect(mapStateToProps, {getUsers, uploadUsers})(Customers);