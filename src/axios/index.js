let baseUrl = "";
let env = process.env.VUE_APP_TITLE === 'alpha' ? 'alpha' : 'production';
switch (env) {
  case 'production':
    // baseUrl = "http://223.4.69.30:8088"; // 测试环境
    baseUrl = "http://dcms.zast.org.cn/hz/interface"; // 测试环境
    // baseUrl = "http://192.168.101.69:8088"; // 测试环境
    break;
  case 'alpha':
    baseUrl = "http://172.30.30.61:8089"; // 测试环境
    // baseUrl = "http://223.4.69.30:8088"; // 阿里云环境
    // baseUrl = "http://192.168.101.69:8088"; // 测试环境
    break;
}
export default baseUrl;
