const router = require('express').Router()
const category1 = require('../controllers/category1')

router.get('/firstApi', category1.firstApi)

module.exports = router
