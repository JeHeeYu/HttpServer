const express = require('express');

const router = express.Router();

router.post('/user', (req, res) => {
    const result = req.body;

    var userID = req.body.id
    var userPW = req.body.pw

    res.send('id  : ' + userID + ' pw : ' + userPW);
});

module.exports = router;