const KoaRouter = require('koa-router')

const subjectController = require('../controllers/subject')

const router = new KoaRouter({ prefix: '/api/subjects' })

router
  .get('/:id', subjectController.GetSubjectById)
  .post('/', subjectController.PostSubjects)
  .post('/:id/submissions', subjectController.PostSubmissions)

module.exports = router
