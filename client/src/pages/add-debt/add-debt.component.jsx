import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { addDebt, getDebts } from '../../redux/customer/customer.actions';

import DebtCard from '../../components/debt-card/debt-card.component';

import './add-debt.styles.scss';


const AddDebt = ({ addDebt, getDebts, debts }) => {
    useEffect(() => {
        getDebts();
      }, [getDebts]);
    const [customerId, setCustomerId] = useState('');
    const [reason, setReason] = useState('');
    const [amount, setAmount] = useState(0);

    const sendDebt = () => {
        addDebt(customerId, reason, amount);
    }

    return (
        <div className='add-debt margin-t80'>
            <div className='form-container'>
                <form onSubmit={sendDebt}>
                <h2>Form para vincular dívida a um usuário</h2>
                    <div>
                        <label htmlFor="">Id do usuário</label>
                        <input type="text" value={customerId} onChange={e => setCustomerId(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Motivo: </label>
                        <input type="text" value={reason} onChange={e => setReason(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Quantia:</label>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
                    </div>
                    <button>Adicionar Dívida</button>
                </form>
            </div>
            {debts && debts.length > 0 && <h1 style={{marginLeft: '20px'}}>Dividas cadastradas</h1>}

        {
            debts && debts.length > 0 ? debts.map(debt => (
                <DebtCard className='' key={debt._id} debt={debt} debtPage={true} />
            ))
            :
            <h1 style={{marginLeft: '20px'}}>
                Não há dívidas cadastradas
            </h1>
        }

        </div>
    )
}

const mapStateToProps = (state) => ({
    debts: state.customer.debts
  });

export default connect(mapStateToProps, { addDebt, getDebts })(AddDebt);