
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

const GetArticleById = async (ctx) => {
  const articleId = ctx.params.id
  console.log(articleId)

  const articleDoc = await ArticleModal
    .findByIdAndUpdate(articleId, { $inc: { read_count: 1 } })

  ctx.body = {
    ...articleDoc.toObject()
  }
}

const PostArticle = async (ctx) => {
  let data = ctx.request.body

  if (!data.title || !data.content) {
    ctx.body = {
      err: 'require necessary filed'
    }
    ctx.response.status = 422
    return
  }
  var articleModal = new ArticleModal({
    title: data.title,
    content: data.content
  })
  await articleModal.save(function (err, articleDoc) {
    if (err) {
      // throw new Error(err.toString())
      ctx.body = {
        err: err.errmsg
      }
      ctx.response.status = 422
    } else {
      ctx.body = {
        ...articleDoc.toObject()
      }
    }
  }).catch((err) => {
    console.log(err.errmsg)
  })
}

module.exports = new SubjectController()
