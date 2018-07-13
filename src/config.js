const path = require('path')

// 系统配置
exports.System = {
  API_server_type: 'http://', // API服务器协议类型,包含"http://"或"https://"
  API_server_host: 'localhost', // API服务器暴露的域名地址,请勿添加"http://"
  API_server_port: '8800', // API服务器监听的端口号
  System_country: 'zh-cn', // 所在国家的国家代码
  System_plugin_path: path.join(__dirname, './plugins'), // 插件路径
  db_type: 'mongodb' // 数据库类型
}

exports.DB = {
  url: 'mongodb://localhost/speaking-master'
}

exports.OAUTH_LWIO = {
  oauthClientInfo: {
    id: 'sample_app',
    clientSecret: 'this_is_the_client_secret',
    name: 'Sample App',
    scope: 'user_info:read',
    responseType: 'code',
    grantType: 'authorization_code',
    redirectUri: 'http://localhost:9528/receive-grant'
  },
  api: {
    getUserInfo: 'http://localhost:29305/api/users'
  }
}

exports.SendEmail = {
  service: 'smtp.abcd.com', // SMTP服务提供商域名
  username: 'postmaster%40abcd.com', // 用户名/用户邮箱
  password: 'password', // 邮箱密码
  sender_address: '"XX平台 👥" <postmaster@abcd.com>'
}
