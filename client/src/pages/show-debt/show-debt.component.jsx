import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { returnDebtsFromUser } from '../../redux/customer/customer.actions';

import DebtCard from '../../components/debt-card/debt-card.component';

import './show-debt.styles.scss';


const ShowDebt = ({ customerDebts, returnDebtsFromUser, match }) => {
    useEffect(() => {
        returnDebtsFromUser(match.params.id);
      }, [returnDebtsFromUser, match.params.id]);
    return (
        <div className='margin-t80'>
            {
            customerDebts && customerDebts.length > 0 ? customerDebts.map(debt => (
                <DebtCard className='' key={debt._id} debt={debt} debtPage={false} />
            ))
            :
            <h1>
                Não há dívidas cadastradas para essa pessoa
            </h1>
        }
        </div>
    )
}

const mapStateToProps = (state) => ({
    customerDebts: state.customer.customerDebts
  });

export default connect(mapStateToProps, { returnDebtsFromUser })(ShowDebt);