const express = require('express');
const router = express.Router();

const User = require('../models/user');

//show all users
router.get('/', async(req, res) => {
    let users = await User.find();
    return res.json(users);
});

//add user
router.post('/', async (req, res) => {
    try {
        const { id, name, email } =  req.body;

        user = new User({
            id,
            name,
            email
        });

        await user.save();

        return res.json(user);

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
