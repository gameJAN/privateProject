import axios from './axios';
import url from './index';
const requests = {
  Login (data) { // 登录
    return axios(url + '/user/login', {
      method: 'post',
      data: data
    })
  },
  putFindUser (data) { // 所有用户查询
    return axios(url + '/user/findAllUser', {
      method: 'post',
      data: data
    })
  },
  postAddUser (data) { // 用户添加或修改
    return axios(url + '/user/add', {
      method: 'post',
      data: data
    })
  },
  postDeleteUser (data) { // 用户删除
    return axios(url + '/user/delete?id=' + data.id, {
      method: 'post'
    })
  },
  getDisplayStatis (data) { // 周、月、年 统计数据总量和增量
    return axios(url + '/display/statis?type=' + data, {
      method: 'get'
    })
  },
  getMetaStructure2 (area) { //主数据结构数据
    return axios(url + '/meta/structure2?area=' + area, {
      method: 'get'
    })
  },
  getMetaStructure3 (area) { //主数据结构数据
    return axios(url + '/meta/structure3?area=' + area, {
      method: 'get'
    })
  },
  getMetaStructure (area) { //元数据结构数据
    return axios(url + '/meta/structure?area=' + area, {
      method: 'get'
    })
  },
  getMetaTableAll (data, area) { //主数据查询表数据
    return axios(url + '/meta/tableAll?area=' + area + '&pageNum=' + data.page + '&pageSize=' + data.size + '&tableId=' + data.tableId, {
      method: 'get'
    })
  },
  getMetaColumnMap (data) { //主数据表字段中英文对照
    return axios(url + '/meta/columnMap?tableId=' + data.tableId, {
      method: 'get'
    })
  },
  postMetaExistTable (data) { //元数据判断表是否存在
    return axios(url + '/meta/existTable?dbId=' + data.dbId + '&tableName=' + data.tableName, {
      method: 'post',
      data: data
    })
  },
  postMetaImport (data) { // 元数据导入
    return axios(url + '/meta/importExcel', {
      method: 'post',
      data: data,
      headers: {'Content-Type': 'application/json;charset=UTF-8;multipart/form-data'}
    })
  },
  postExcelDownload() { // 元数据模版下载
    return axios(url + '/meta/exportExcelTemp', {
      method: 'get',
      responseType: 'arraybuffer'
    })
  },
  ExportTable (data) { // 元数据表格导出
    return axios(url + '/meta/exportExcel?tableId=' + data, {
      method: 'get',
      responseType: 'arraybuffer'
    })
  },
  postMetaNewTable (data, id) { // 元数据表创建
    return axios(url + '/meta/newTable?dbId=' + id, {
      method: 'post',
      data: data
    })
  },
  postMetaColumns(data) { // 元数据--根据id查询表字段列表
    return axios(url + '/meta/columns?tableId=' + data, {
      method: 'get',
    })
  },
  getMetaFlow(area) { // 首页--流向数据
    return axios(url + '/meta/flowStatistics?area=' + area, {
      method: 'get',
    })
  },
  getMetaSystem(area) { // 首页--应用系统列表
    return axios(url + '/meta/systemStatistics?area=' + area, {
      method: 'get',
    })
  },
  getMetaMap(area) { // 首页--地图数据统计
    return axios(url + '/meta/mapStatistics?area=' + area, {
      method: 'get',
    })
  },
  getMetaMonth (area) { // 首页--资源统计
    return axios(url + '/meta/monthStatistics?area=' + area, {
      method: 'get',
    })
  },
  getMetaSystemResource (data, area) { // 首页--子页面应用系统根据id查询系统下表
    return axios(url + '/meta/systemResource?area=' + area + '&systemId=' + data, {
      method: 'get',
    })
  },
  getMetaTaleInfo (data,area) { // 首页--子页面资源统计根据id查询表字段信息
    return axios(url + '/meta/tableInfo?area=' + area + '&tableId=' + data, {
      method: 'get',
    })
  },
  getMetaClassify (area) { // 首页--子页面全省分类数据
    return axios(url + '/meta/classifyStatistics?area=' + area, {
      method: 'get',
    })
  },
  postMetaModify (data, tableId) { // 主数据--修改表内数据
    return axios(url + '/meta/modify?tableId=' + tableId, {
      method: 'post',
      data: data
    })
  },
  getMetaSearch (data,area) { // 元数据--搜索表
    return axios(url + '/meta/metaSearch?tableName=' + data + '&area=' + area, {
      method: 'get',
    })
  },
  getMetaMasterSearch (data,area) { // 主数据--搜索表内
    return axios(url + '/meta/masterSearch?area=' + area + '&pageNum=' + data.pageNum + '&pageSize=' + data.pageSize + '&tableId=' + data.tableId + '&words=' + data.words, {
      method: 'get',
    })
  },
  getMetaAreaMap () { // 用户--查询城市列表
    return axios(url + '/meta/areaMap', {
      method: 'get',
    })
  },
  getMetaAreaName (data) { // 用户--查询城市列表
    return axios(url + '/meta/areaName?areaId=' + data, {
      method: 'get',
    })
  },
  getExchange() { // 平台列表
    return axios(url + "/exchange/tableList", {
      method: 'get'
    })
  },
  getDisplayOut() { // 外部接口弹框
      console.log('123')
      return axios(url + "/display/out", {
          method: 'get'
      })
  },
  getMetaSystemUseInfo () { // 应用系统使用情况
      return axios(url + "/meta/systemUseInfo", {
          method: 'get'
      })
  },
  getMetaBoloScience (date) { // 应用系统使用情况
      return axios(url + "/meta/boloScience?date=" + date, {
          method: 'get'
      })
  },
  getExpertTotal(){
    return axios(url + "/meta/expert/total", {
      method: 'get'
    })
  },
  getExpertSex(type){
    return axios(url + "/meta/expert/sex/" + type, {
      method: 'get'
    })
  },
  getExpertBirth(type){
    return axios(url + "/meta/expert/birth/" + type, {
      method: 'get'
    })
  },
  getExpertElect(){
    return axios(url + "/meta/expert/elect", {
      method: 'get'
    })
  },
  getExpertNative(type){
    return axios(url + "/meta/expert/native/" + type, {
      method: 'get'
    })
  },
  resetPassword(id){ //重置用户密码
    return axios(url + "/user/resetPassword", {
      method: 'post',
      data:id
    })
  },
  updatePassword(data){ //修改用户密码
    return axios(url + "/user/updatePassword", {
      method: 'post',
      data:data
    })
  },
};

export default requests;
