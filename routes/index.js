const path = require("path");
const router = require('express').Router();

// // tell the app when to use these routes

// // if no routes are hit, go to react app
router.get('/', (req, res) => {
    res.render('layouts/main');
});

module.exports = router;