/**
 * 对文段的一个简单封装
 */
 const p = (left = '', right = '') => {
    return { left, right }
 }
 /**
 * header
 * 默认将内容转为h4
 */
 const h = (left = '', right = '') => {
    return { left: `#### ${left}`, right: `#### ${right}` }
 }


/**
 * 正文部分

 * 说明：本模版在pc端和打印端采用两栏式显示，手机端采用单栏

 * 请自己判断并适应页面尺寸
 */
  export default [
    /**
     * 每一个小模块，都有以下几个配置项：
    
     * title： 顶部名称栏
    
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
      {
        title: '竞赛经历',
        content: [
        
        p('- ICPC国际大学生程序设计竞赛区域赛（南京站）银牌'),
        
        p('- ICPC中国邀请赛银牌'),
        
        p('- CCPC中国大学生程序设计竞赛区域赛（绵阳站）铜牌'),
        
        p('- CCF CSP认证300分'),
        
        p('- 重庆市、四川省程序设计大赛金牌（一等奖）'),
        
          ]
        },
        {
          title: '项目经历',
          content: [
        p('- 红岩网校后端整体项目架构设计，SDK的开发维护'),
        
        p('- 轻量级RPC框架Begonia的开发与维护', '[Link](https://github.com/MashiroC/begonia)'),
        
        p('- 校园APP掌上重邮后端开发'),
      
      p('- 重邮小帮手后台管理项目'),
    
      p('- 红岩网校登录中心，实现了所有项目的登录模块，包括账号密码登录、Oauth登录、openid connect登录等多种登录模式')
      
          ]
        },
        
        {
          title: '工作经历',
          content: [
        p('多次作为主要负责人组织ACM程序设计校赛，大学期间为校赛命题十余道'),
        
      p('多次组织ACM集训队选拔，ACM省赛、天梯赛选拔及报名'),
    
      p('作为红岩网校Web研发部部长，推进网校后端整体架构迭代，推行落实全新的项目开发及文档规范'),
      
      p('在红岩网校和ACM协会多次给学弟学妹上课，讲解后端开发和算法的知识技能')
        
          ]
        },
        
        {
          title: '个人能力',
          content: [
        p('熟悉go语言特性，能较为熟练地使用go进行后端开发'),
        
        p('了解C/C++、Python等语言的基础语法，能熟练使用C++实现算法，能使用Python编写简单的数据处理脚本'),
    
    p('了解计算机网络、操作系统、计算机组成原理、数据库原理等计算机基础知识'),
    
    p('了解MySQL、Redis等常见中间件的特性和基础指令'),
    
    p('了解linux基础指令，能使用git、gitlab等工具进行CI/CD，简单了解Kubenets概念、特性'),
    
      ]
    }
      ]
    
    
