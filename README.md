# express

一个为了方便自己写前端，与之配合的一个后端项目，框架用的express

## 解析json参数

安装插件

```shell
yarn add body-parser --save
```

## token实现

1.jsonwebtoken

* 生成token的方法 sign
* 验证token的方法 verify

```shell
yarn add jsonwebtoken --save
```

2.express-jwt

* 验证token是否过期并规定那些路由不需要验证 express-jwt({})

```shell
yarn add express-jwt --save
```
