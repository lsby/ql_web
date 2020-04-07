import express from 'express'
var router = express.Router()

// 使用 req.session 即可访问 session
router.post('/test', function (req, res, next) {
  res.send('respond with a resource')
})

export default router
