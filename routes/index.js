const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('HEllo world')
})

module.exports = router