
/**
 * 全局变量
 */
//本地环境
//global.baseUrl = "http://localhost:3030";
//正式环境
global.baseUrl = "http://working.admin.rzzc.ltd";
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

  survey_day: '/survey/every_day', //历史每日数据
  survey_profit: '/survey/profit', //历史盈利数据
  survey_month: '/survey/every_month', //历史每月数据
  survey_agent_list: '/survey/agent_list', //数据代理总表
  survey_commerce_list: '/survey/commerce_list', //数据商务总表
  survey_direct_team: '/survey/direct_team', //数据直属团队

  survey_online_games: '/survey/online_games', //获取在线在玩数据
  survey_enroll: '/survey/enroll', //获取实时注册人数
  survey_payment: '/survey/payment', //获取实时支付人数
  survey_online_time: '/survey/online_time', //获取在线时长分布
  survey_turn_round: '/survey/turn_round', //获取注册回头率
  survey_pay_every_day: '/survey/pay_every_day', //获取每日支付相关数据
  survey_room_cost: '/survey/room_cost', //获取房卡赠送与消耗
  survey_friendster: '/survey/friendster', //获取亲友圈数据


  operation_agent_list: '/operation/agent_list', //运营代理总表
  operation_update_status: '/operation/update_status', //运营代理总表修改状态
  operation_commerce_update_status: '/operation/commerce_update_status', //运营代理总表修改状态
  operation_restart_pwd: '/operation/restart_pwd', //运营代理总表重置密码
  operation_commerce_restart_pwd: '/operation/commerce_restart_pwd', //运营代理总表重置密码
  operation_update_agent_level: '/operation/update_agent_level', //运营代理总表修改代理等级
  operation_update_commerce: '/operation/update_commerce', //运营代理总表修改商务代表
  operation_update_Coupon_Code: '/operation/update_coupon_code', //运营代理总表修改商务代表
  operation_update_commerce_superior_id: '/operation/update_commerce_superior_id', //运营代理总表修改代理等级
  operation_check_couponCode: '/operation/check_couponCode', //检查新的优惠码 是否存在

  query_agent_individual_rebate_ratio_info: "/users/queryAgentIndividualRebateRatioInfo", // 查询指定代理的独立返利比例信息
  query_agents_individual_rebate_ratio_info: "/users/queryAgentsIndividualRebateRatioInfo", // 查询拥有独立返利比例的所有代理的独立返利比例信息
  update_agent_individual_rebate_ratio_info: "/users/updateAgentIndividualRebateRatioInfo", // 调整指定代理的独立返利比例信息
  cancel_agent_individual_rebate_ratio: "/users/cancelAgentIndividualRebateRatio", // 取消指定代理的独立返利比例

  educe_day: '/educe/every_day', //历史每日数据导出
  educe_profit: '/educe/profit',//历史盈利数据导出
  educe_agent_list: '/educe/agent_list', //数据代理总表导出
  educe_commerce_list: '/educe/commerce_list', //数据商务总表导出
  educe_direct_team: '/educe/direct_team', //数据直属团队导出

  commerce_withdrawal_audit: '/commerce/withdrawal_audit', //提现列表
  commerce_withdrawal_list: '/commerce/withdrawal_list', //提现审核
  commerce_restart: '/commerce/restart', //重置密码
  commerce_details: '/commerce/details', //商务业绩
  commerce_list: '/commerce/list', //商务账号列表
  commerce_add: '/commerce/add', //添加商务账号
  commerce_disabled: '/commerce/disabled', //禁用\启用商务账号
  commerce_find: '/commerce/find', //根据账号获取用户信息
  commerce_nickname_find : '/commerce/nickname_find',

  users_getUserInfo : '/users/getUserInfo',//获取指定用户的信息
  users_getcommerce : '/users/getcommerce',//获取指定用户的代理的商务
  users_commercelist : '/users/commercelist',//获取商务
  agent_add : "/users/authorization", //代理授权

  log: '/log', //获取日志列表
  issue: '/report/issue', //问题反馈

  report_realtime: "/report/realtime", // 实时数据

};

/**
 * 分页全局配置
 */
global.page = {
  index: 0,
  size: 20
}
