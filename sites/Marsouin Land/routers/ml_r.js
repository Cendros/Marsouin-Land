const express = require('express');
const path = require('path');

const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/../views/home.html'));
});

module.exports = router;