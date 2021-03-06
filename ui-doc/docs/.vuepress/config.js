module.exports = {
  title: 'st-ui', // 设置网站标题
  description: '智融前端UI组件库', //描述
  dest: './build', // 设置输出目录
  port: 1234, //端口
  themeConfig: { //主题配置
      nav: [{
              text: '主页',
              link: '/'
          }, // 导航条
      ],
      // 为以下路由添加侧边栏
      sidebar: {
          '/components/': [{
                  collapsable: true,
                  children: [
                      'button'
                      //...
                      // 每加一个菜单需要在这里也新增一下
                  ]
              }
          ]
      }
  }
}
