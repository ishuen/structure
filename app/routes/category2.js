const router = require('express').Router()
const category2 = require('../controllers/category2')

router.get('/secondApi', category2.secondApi)

module.exports = router
