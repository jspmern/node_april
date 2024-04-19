let express = require('express')
let route = express.Router()

let { homeController, aboutController, contactController, contactPostController, userController, allDataController, searchHandler } = require('../controller/assignmentController')


//this is for the home page
route.get('/', homeController)
route.get('/about', aboutController)
route.get('/contact', contactController)
route.post('/contact', contactPostController)
route.get('/allData', allDataController)
route.get('/user', userController)
route.get('/search',searchHandler)

module.exports = route