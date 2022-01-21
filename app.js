const express = require('express')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const loginRouter = require('./routes/login')
const userRouter = require('./routes/user')
const { getToken } = require('./utils')

const app = express()

// 跨域处理
app.all('*', function (req, res, next) {
    console.log('接收到请求')
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
	res.header('X-Powered-By', ' 3.2.1')
	if (req.method == 'OPTIONS') res.send(200)
	else next()
})

app.use(bodyParser.json())

//解析token获取用户信息
app.use(function (req, res, next) {
    var token = req.headers['authorization'];
    if (token == undefined) {
        next();
    } else {
        getToken(token).then((data) => {
            req.data = data;
            next();
        }).catch((error) => {
            next();
        })
    }
});

//验证token是否过期并规定那些路由不需要验证
app.use(expressJwt({
    secret: 'zgs_first_token',
   // 算法
    algorithms: ['HS256']
}).unless({
    path: ['/login', '/register','/']  //不需要验证的接口名称
}))

//token失效返回信息
app.use(function (err, req, res, next) {
    if (err.status == 401) {
        return res.status(401).send('token失效')
        //可以设置返回json 形式  res.json({message:'token失效'})
    }
})

app.use('/login', loginRouter)
app.use('/user', userRouter)

app.listen('5000', () => {
	console.log('服务已启动，端口：5000')
})
