####安装Npm依赖包

详细的依赖包清单请参考`package.json`文件，Gulp相关配置请看`gulpfile.js`
````
npm install 或 npm install --save-dev
````
####文件结构

````
脚手架/
├── css/
│   ├── app/ [目录]存放自定义样式
│   │   ├── less/ [目录]自定义less的目录
│   │   │   ├── ... / [目录]页面less的目录
│   │   │   │   └── ... 页面单个less样式
│   │   │   ├── app.less 主less
│   │   │   ├── common.less 全局样式和自定义变量
│   │   │   ├── footer.less 底部样式
│   │   │   └── header.less 头部样式
│   │   ├── app.css 整个项目css合并文件
│   │   ├── app.css.map 用于DEBUG，针对开发人员
│   │   ├── app-ios.css 100%还原苹果字体设计
│   │   ├── demo_fontclass.html 字体文件之一
│   │   ├── demo_symbol.html 字体文件之一
│   │   ├── demo_unicode.html 字体文件之一
│   │   ├── demo.css 字体文件之一
│   │   ├── iconfont.css 字体文件之一
│   │   ├── iconfont.eot 字体文件之一
│   │   ├── iconfont.js 字体文件之一
│   │   ├── iconfont.svg 字体文件之一
│   │   ├── iconfont.ttf 字体文件之一
│   │   └── iconfont.woff 字体文件之一
│   └── lib/ [目录]存放第三方样式
│       ├── bootstrap.css 默认css框架
│       └── ... 其他插件css
│
├── img/ [目录]存放项目图片素材
│   ├── .../ [目录]页面目录
│   │   └── ... 页面素材
│   ├── icon/ [目录]存放头部head图标
│   └── ... 存放网站logo
│
├── js/ [目录]存放项目js
│   ├── app/ [目录]存放页面js
│   │   ├── ... 页面js
│   │   ├── common.js 公用js
│   │   ├── footer.js 底部js
│   │   └── header.js 头部js
│   ├── lib/ [目录]第三方js
│   │   ├── ... 插件js
│   │   └── jquery.1.11.3.min.js 默认js
│   ├── app.js 默认js[新建js复制新建]
│   └── main.js require加载模块参数配置
│
├── wcm/  [目录]存放WCM模板
│   └── ... 存放临时的WCM模板文件
│
├── build.js 压缩配置
├── cmd.bat 启动gulp批处理
├── gulpfile.js gulp配置文件，建议先阅读配置
├── index.html 默认页[新建页面复制新建]
├── package.json 依赖模块json文件,在项目目录下执行 npm install 会安装项目所有的依赖模块
├── r.js 压缩依赖
└── *.html x N

````
######文件监听
可监听开发目录下`css/**/*.less`,`css/**/*.css`, `js/**/*`, `images/**/*`,`*.html`的变化，自动编译less并刷新浏览器。
使用

````
gulp
````




######文件压缩

目录右键打开命令窗口执行
参考网站http://www.oschina.net/translate/optimize-requirejs-projects

````
node r.js -o build.js
````
######注意事项

本模板基于WCM制作的脚手架，一切图片不能出现在less或css文件里，第三方样式带图片的，在使用前，路径修改为同app.css目录，不然WCM读不到。


