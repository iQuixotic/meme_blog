const db = require('../models');

module.exports = {
    
    // return all global accounts from the database
    read: function(req, res) {
      db.Bank
        .find({}) 
        .then((dbModel) => { res.json(dbModel) })
        .catch(err => res.json(err))
    },

}