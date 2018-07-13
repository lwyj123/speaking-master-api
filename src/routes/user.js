const KoaRouter = require('koa-router')

const userController = require('../controllers/user')

const router = new KoaRouter({ prefix: '/api/users' })

router
  .get('/:username', userController.GetUserInfoById)

module.exports = router
