
/**
 * 全局变量
 */
//本地环境
//global.baseUrl = "http://localhost:3030";
//正式环境
global.baseUrl = "https://working.api.ssmulu.com";
//api全局路由
global.url = {
  login: '/admin/login', //用户登录

  role_add: '/role/add', //添加角色
  role_list: '/role/list', //获取角色列表
  role_linklist: '/role/linklist', //获取链接列表
  role_addrolelink: '/role/addrolelink', //添加角色权限
  role_del: '/role/del', //删除角色权限
  role_getRole: 'role/getRole', //获取当前用户身份

  account_add: '/admin/add', //添加用户
  account_exists: '/admin/exists', //验证账号是否存在
  account_list: '/admin/list', //账号列表
  account_pwd: '/admin/pwd', //修改密码
  account_restpwd: '/admin/restpwd', //重置密码
  account_loginout: '/admin/loginout', //退出登录
  account_disabled: '/admin/disabled', //禁用账户
  account_find: '/admin/account', //获取用户
  account_link: '/admin/link', //获取用户权限

  chat_add_title: '/chat/addTitle', //新增内容
  chat_get_title: '/chat/getTitle', //获取单条内容
  chat_delete_title: '/chat/deleteTitle', //删除内容
  chat_manage_title: '/chat/manageTitle', //管理群聊信息

  chat_wx_share_list: '/chat/wxShareList',  //微信分享自定义列表
  chat_wx_share_add: '/chat/wxShareAdd', //微信自定义分享新增
  chat_wx_share_operation: '/chat/wxShareOperation',  //禁用
  chat_wx_share_one_list: '/chat/wxShareOne',  //查询记录
  chat_wx_delete: '/chat/wxShareDelete',  //删除

  domain_add: '/domain/domainAdd',  //新增域名
  domain_delete: '/domain/domainDelete',  //新增域名
  domain_operation: '/domain/operation',  //禁用
  domain_list: '/domain/domainList',  //新增域名
  domain_one_list: '/domain/domainOneList',  //新增域名
  domain_timer: '/domain/domainTimer',  //管理定时任务

  log: '/log', //获取日志列表
  issue: '/report/issue', //问题反馈


};

/**
 * 分页全局配置
 */
global.page = {
  index: 0,
  size: 20
};
