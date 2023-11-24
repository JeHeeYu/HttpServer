const express = require('express');

const router = express.Router();

router.post('/user', (req, res) => {
    console.log("/user");

    const result = req.body;

    var userID = req.body.id
    var userPW = req.body.pw

    res.send('id  : ' + userID + ' pw : ' + userPW);
});

router.post('/onboard/complete', (req, res) => {
    console.log("/onboard/complete");
    
    const result = req.body;

    var age = req.body.id
    var birth = req.body.pw
    var lang = req.body.id
    var uid = req.body.pw
    var travelWith = req.body.id
    var role = req.body.pw
    var travelStartDate = req.body.id
    var travelEndDate = req.body.pw
    var transport = req.body.id
    var themaId = req.body.pw
    var destination = req.body.id

    res.send('age  : ' + age + 
             ' birth : ' + birth +
             ' lang : ' + lang +
             ' uid : ' + uid +
             ' travelWith : ' + travelWith +
             ' role : ' + role +
             ' travelStartDate : ' + travelStartDate +
             ' travelEndDate : ' + travelEndDate +
             ' transport : ' + transport +
             ' themaId : ' + themaId +
             ' destination : ' + destination
    );
});



module.exports = router;