const express = require('express')
const { commonJsonData } = require('../config')
const { auth } = require('../data')
const { setToken } = require('../utils')

const router = express.Router()

router.post('/', (req, res) => {
	console.log(req.body)
    const params = [];
    params[0] = req.body.username
    params[1] = req.body.password
	setToken(...params).then(token => {
		console.log('生成token成功')
		commonJsonData.data = { token }
		res.json(commonJsonData)
		res.end()
	})
	
})

module.exports = router