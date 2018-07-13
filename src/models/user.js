const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  lwio_id: {
    type: String,
    unique: true,
    required: true
  },
  username: { // 登录用户名
    type: String,
    unique: true,
    required: true
  },
  nickname: { // 显示名称，昵称
    type: String,
    unique: true,
    required: true
  },
  meta: { // meta信息
    age: {
      type: Number
    },
    sex: {
      type: String,
      enum: ['male', 'female']
    }
  }
})

UserSchema.set('toObject', {
  transform: function (doc, ret, options) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

UserSchema.statics.upsertByLwioId = async function (lwioId, {username, nickname, meta}) {
  await this.update({lwio_id: lwioId}, {
    username,
    nickname,
    meta
  }, {upsert: true, setDefaultsOnInsert: true})
  const [userDoc] = await this.find({lwio_id: lwioId})
  return userDoc
}

module.exports = mongoose.model('User', UserSchema)
