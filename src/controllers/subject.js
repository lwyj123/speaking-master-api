
// const path = require('path')
const BaseController = require('./prototype/BaseController')
const SubjectModal = require('../models/subject')
const pagination = require('../helpers/page')

class SubjectController extends BaseController {
  async GetArticleList (ctx) {
    const query = ctx.query
    const searchQuery = {}
    if (false) {
      searchQuery.$and = []
    }
    if (false) {
      searchQuery.$or = []
    }
    const list = await ArticleModal
      .find(searchQuery)
      .sort({ updated_at: -1 })

    const data = pagination.getCurrentPageDataWithPagination(
      list.map(item => item.toObject()),
      query.offset + 1,
      query.limit
    )
    ctx.body = {
      ...data
    }
  }

  async GetSubjectById (ctx) {
    ctx.body = {
      id: 1,
      name: 'Most attractive theme of children museum exhibition',
      content: 'What the fuck is that you are a fucking doubi',
      tags: [
        'Toefl',
        'one of three',
        'task 1'
      ],
      paticipants: 12
    }
  }

  async PostSubjects (ctx) {
    const { ...params } = ctx.request.body
    if (!params.name) {
      throw Error('没有name参数')
    }
    if (!params.content) {
      throw Error('没有content参数')
    }
    const newSubject = await SubjectModal.createSubject({
      ...params
    })
    ctx.body = {
      ...newSubject.toObject()
    }
  }

  async PostSubmissions (ctx) {
    const { ...params } = ctx.request.body
    if (!params.content) {
      throw Error('没有content参数')
    }
    if (!params.audio_url) {
      throw Error('没有audio_url音频地址参数')
    }

    ctx.body = {
      id: 'E3if'
    }
  }

  async test (ctx) {
    ctx.body = {
      'test': 'wori'
    }
  }
}

module.exports = new SubjectController()
