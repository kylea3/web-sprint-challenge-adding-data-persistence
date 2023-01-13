// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {

})

router.post('/', (req, res, next) => {
    
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'The server had an error',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;