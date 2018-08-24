const path = require("path");
const router = require('express').Router();

// // tell the app when to use these routes

// // if no routes are hit, go to react app
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;