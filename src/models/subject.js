const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SubjectSchema = new Schema({
  name: { // 显示名称，昵称
    type: String,
    unique: true,
    required: true
  },
  content: { // 题目内容
    type: String,
    required: true
  },
  tags: { // 标签
    type: Object,
    default: []
  },
  paticipants: { // 提交人数
    type: Number
  }
})

SubjectSchema.set('toObject', {
  transform: function (doc, ret, options) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

module.exports = mongoose.model('Subject', SubjectSchema)
