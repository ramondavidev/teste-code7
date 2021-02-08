import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import { editDebt } from '../../redux/customer/customer.actions';

import './edit-debt-styles.scss';

import api from '../../utils/api';


const EditDebt = ({ match, editDebt }) => {
    const [reason, setReason] = useState('');
    const [amount, setAmount] = useState(0);
    const id = match.params.id;

    const history = useHistory();

    useEffect(() => {

        const fetchDebt = async () => {

            const res = await api.get(`http://localhost:5000/api/debt/one/${id}`);

            setReason(res.data.reason);
            setAmount(res.data.amount);
        }
        fetchDebt();
      }, [id]);

      const onSubmit = () => {
          const form = {
              reason, amount, id
          }
        editDebt(form);
        history.push("/adicionar-divida");
      }

    return (
        <div className='margin-t80 add-debt'>
            <h2 style={{textAlign: 'center'}}>Editar Dívida</h2>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <div className>
                        <label htmlFor="">Motivo: </label>
                        <input onChange={e => setReason(e.target.value)} value={reason} name='reason' type="text"/>
                    </div>
                    <div className>
                        <label htmlFor="">Quantia:</label>
                        <input onChange={e => setAmount(e.target.value)} value={amount} name='amount' type="number"/>
                    </div>
                    <button>Adicionar Dívida</button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, { editDebt })(EditDebt);