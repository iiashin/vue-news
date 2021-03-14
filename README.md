# news
vue-cli + mock.js + router +mint-ui +vuex + vue-awesome-swiper
实现一个简易的今日头条


### 目录结构
```
├── build                                 //构建相关
├─.gitignore
├─babel.config.js
├─package-lock.json
├─package.json
├─README.md
├─vue.config.js                       //配置
├─src
|  ├─App.vue
|  ├─main.js
|  ├─views
|  |   ├─detail.vue                       //文章详情页面
|  |   ├─Home.vue                        //主页面
|  |   └search.vue                       //搜索页面
|  ├─store                               //全局store
|  |   └index.js
|  ├─router                             //路由
|  |   └index.js
|  ├─mock                                //mock，模拟接口拦截请求
|  |  └mock.js
|  ├─components                         //局部组件
|  |     ├─listItem.vue                 //新闻不同格式的标题展示
|  |     ├─myContainer.vue              //栏目列表组件
|  |     ├─myHeader.vue                  //首部组件
|  |     ├─pullContainer.vue             //下拉容器组件
|  |     └swiperContainer.vue            //左右滑动组件
|  ├─assets                               //图片样式
|  |   ├─3.jpg
|  |   ├─back.png
|  |   ├─content.jpg
|  |   ├─dot2.png
|  |   ├─eye.png
|  |   ├─header.png
|  |   ├─item1.jpg
|  |   ├─item2.jpg
|  |   ├─item3.jpg
|  |   ├─item4.jpg
|  |   ├─item5.jpg
|  |   ├─logo.png
|  |   ├─noeye.png
|  |   ├─none.png
|  |   ├─none2.png
|  |   └search.png
├─public
|   ├─favicon.ico 
|   ├─index.html                    //入口html文件
```

### 实现功能 
1. 下拉刷新新闻
2. 左右滑动切换栏目列表
3. 热点文章推荐
4. 搜索功能
5. 点击新闻标题查看具体内容

### 部分截图



边写边学习新知识，继续努力

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
