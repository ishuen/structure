var express = require('express')
var router = express.Router()

router.use('/category1', require('./category1'))
router.use('/category2', require('./category2'))
router.use('/users', require('./users'))

//  *
//  * @api {get} / Find a default page
//  * @apiGroup Index
//  * @apiParam {id} id Task id
//  * @apiSuccess {Number} id Task id
//  * @apiSuccess {String} title Task title
//  * @apiSuccess {Boolean} done Task is done?
//  * @apiSuccess {Date} updated_at Update's date
//  * @apiSuccess {Date} created_at Register's date
//  * @apiSuccessExample {json} Success
//  *    HTTP/1.1 200 OK
//  *    {
//  *      "id": 1,
//  *      "title": "Study",
//  *      "done": false
//  *      "updated_at": "2016-02-10T15:46:51.778Z",
//  *      "created_at": "2016-02-10T15:46:51.778Z"
//  *    }
//  * @apiErrorExample {json} Task not found
//  *    HTTP/1.1 404 Not Found
//  * @apiErrorExample {json} Find error
//  *    HTTP/1.1 500 Internal Server Error

// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' })
// })

module.exports = router
