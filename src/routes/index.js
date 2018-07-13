const compose = require('koa-compose')
const testRoutes = require('./test')
const subjectRoutes = require('./subject')
const userRoutes = require('./user')

const router = compose([
  testRoutes.routes(),
  testRoutes.allowedMethods(),
  subjectRoutes.routes(),
  subjectRoutes.allowedMethods(),
  userRoutes.routes(),
  userRoutes.allowedMethods()
])

module.exports = router
