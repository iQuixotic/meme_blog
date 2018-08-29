const router = require('express').Router();
const data = require('../controllers/helpers/routeHelpers')
// const authRoutes = require('./auth')

// tell the app when to use these routes
// router.use('/auth', authRoutes);

// if no routes are hit, go the app
router.get('/', (req, res) => {
    res.render('layouts/main');
});

router.get('/login', (req, res) => {
    res.render('layouts/login');
});

router.get('/register', (req, res) => {
    res.render('layouts/register', data);
});

module.exports = router;
