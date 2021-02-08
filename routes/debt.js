const express = require('express');
const router = express.Router();

const Debt = require('../models/debt');
const User = require('../models/user');

router.get('/', async(req, res) => {
    const debts = await Debt.find();
    return res.json(debts);
})



//return all debts from a user
router.get('/one/:id', async(req, res) => {
    const id = req.params.id;
    const debt = await Debt.findById(id);
    return res.json(debt);
})

//create a debt
router.post('/', async(req, res) => {
    try {

        const { customerId, reason, amount } =  req.body;

        const user = await User.findOne({ id: customerId });

        if(!user) {
            return res.status(400).json({ msg: 'usuário não existe' });
        }

        const debt = new Debt({
            customerId: user._id,
            relatedCustomerId: customerId,
            reason,
            amount
        });

        await debt.save();

        return res.json(debt);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ msg: 'something went wrong' });
        
    }
});

//return all debts from a user
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ id });
    const debts = await Debt.find({ customerId: user._id });
    return res.json(debts);
})

//edit a debt
router.put('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const { reason, amount} =  req.body;
        const debtUpdated = {
            reason,
            amount
        }
        const debtReturned = await Debt.findByIdAndUpdate(req.params.id, debtUpdated, {new: true});
        return res.json(debtReturned);
    } catch (error) {
        console.log(error);
    }
});

//Delete debt by Id
router.delete('/:id', async(req, res) => {
    try {
        await Debt.findByIdAndDelete(req.params.id);
        return res.json({ msg: 'Postagem removida com sucesso' });
    } catch (error) {
        console.error(error);
        return res.json({ error: error.message });
    }
});

module.exports = router;
