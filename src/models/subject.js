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
  creator_id: {
    type: String
  },
  paticipants: { // 提交人数
    type: Number,
    default: 0
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

SubjectSchema.set('toObject', {
  transform: function (doc, ret, options) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

SubjectSchema.statics.createSubject = async function ({name, content, tags = []}) {
  const [subjectExist] = await this.find({$or: [
    { name: name }
  ]})
  if (subjectExist && subjectExist.name === name) {
    throw Error('duplicate subject name')
  }
  const subject = new this({
    name,
    content,
    tags
  })
  const subjectDoc = await subject.save()
  return subjectDoc
}

module.exports = mongoose.model('Subject', SubjectSchema)
