/**
 * 顶部栏的配置参数
 */
 export default {
    // 姓名
    name: '黄晨峰',
    // GitHub地址
    // 会显示在姓名的右方
    // 在手机上会显示成小logo
    github: 'sarailQAQ',
    // 意向的工作
    // 建议不超过8个字
    job: '',
    /**
   
   * 简介栏
   
   * 最多可以有三个
  
   * 建议区分各种信息的层级
     */
     profiles: [
     '男 · 2023届本科  ',
     '重庆邮电大学 · 数据科学与大数据技术',
     
     ],
     /**
     
   * 信息栏
   
   * @param {[Object]} 需要显示的信息
   
   * 最多可显示3条
   
  * 在pad和手机上只会显示logo
   
   * address： 渲染出来的文本信息
   
  * 注意：请勿添加协议名，若添加，将会导致链接出错
  
   * type（可选）：icon的名称
   
   * icon目前有以下几种： tell, blog, github, mail, qq, wechat
   
   * 如果有更多的icon需求
  
  * 请提issue
     */
     contacts: [
      { address:  'sarail@qq.com',  type: 'mail'  },
  
   {address: '15257608528', type: 'tell'},
   {address: 'https://blog.sarailqaq.org.cn', type: 'blog'}
   
   ],
   /**
   
 * @param {[Boolean]} 是否显示微信二维码
 
 * 二维码在pad和手机端不会显示
 
 * 如果为true，将自动加载 项目根目录/static/wechat.png 这个路径的图片
 
 * 注意是png格式，长宽比应为1:1
   */
   weChatQrCode: true,
   /**
   
 * 是否在HTML文档页面显示二维码
 
 * 若为false，则只在打印PDF时显示二维码
 */
   showWeChatQrCodeInHTML: false
 }
