const compose = require('koa-compose')
const testRoutes = require('./test')
const subjectRoutes = require('./subject')

const router = compose([
  testRoutes.routes(),
  testRoutes.allowedMethods(),
  subjectRoutes.routes(),
  subjectRoutes.allowedMethods()
])

module.exports = router
