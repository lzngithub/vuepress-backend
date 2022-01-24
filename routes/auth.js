const express = require('express')
const { commonJsonData } = require('../config')
const { auth } = require('../data')
const { setToken } = require('../utils')

const router = express.Router()

router.post('/login', (req, res) => {
	console.log(req.body)
    const params = [];
    params[0] = req.body.username
    params[1] = req.body.password
	setToken(...params).then(token => {
		console.log('生成token成功')
		commonJsonData.data = { token, type: 1, expireAt: 60 }
		res.json(commonJsonData)
		res.end()
	})
	
})

router.get('/getUserInfo', (req, res) => {
	console.log('/userInfo')
	const userInfo = {
		id: 1,
		name: 'liangzn',
		mobile: '13125175275',
		gender: 1,
		userType: 1,
	}
	commonJsonData.data = { userInfo }
	res.json(commonJsonData)
	res.end()
	
})



module.exports = router