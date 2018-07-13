
// const path = require('path')
const BaseController = require('./prototype/BaseController')
const UserModal = require('../models/user')
const rp = require('request-promise')
const OAuthConfig = require('../config').OAUTH_LWIO

class UserController extends BaseController {
  async GetUserInfoById (ctx) {
    const accessToken = ctx.request.body.accessToken
    const lwioUsername = ctx.params.username
    // 根据Token和userId请求OAuth服务器获取用户信息
    const userInLwio = await rp(`${OAuthConfig.api.getUserInfo}/${lwioUsername}`, {
      headers: {
        'Access-Token': accessToken
      },
      json: true
    })
    const userDoc = await UserModal.upsertByLwioId(userInLwio.id, userInLwio)
    ctx.body = {
      ...userDoc.toObject()
    }
  }
}

module.exports = new UserController()
