const express = require('express')
const { commonJsonData } = require('../config')

const router = express.Router()

router.get('/userInfo', (req, res) => {
    console.log('/userInfo')
	const userInfo = {
		name: 'li',
		mobile: '13125175275',
		gender: 1,
	}
	commonJsonData.data = { userInfo }
	res.json(commonJsonData)
	res.end()
})

module.exports = router