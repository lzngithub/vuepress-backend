let client  = require('scp2')

client.scp('../test', {
    host: '139.159.239.247',
    username: 'root',
    password: 'lI13125175275',
    path: '/opt/node/backend/express/test'
}, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('上传成功')
    }
})