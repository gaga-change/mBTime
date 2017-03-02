# Vue 《北京时间》

> 在原先的基础上，改用vue架构

## 运行前提

当前系统有安装node.js

node.js 版本不低于6.0.0

如果是webstorm,需要改动设置(2016.3.3版为例)
* JS规范调到ECM6
	* Settings -> Languages & Frameworks -> JavaScript（ECMAScript 5 改成 ECMAScript 6）
* 解决热部署有时失效问题
	* Settings -> Appearance & Behavior -> System Settings( Synchornization 最后一项勾去掉)

## 运行

``` bash
**所有命令都得在当前文件夹根目录下运行**

# 下载依赖环境
npm install

# serve with hot reload at localhost:****
# 运行开发环境，端口在当前目录下的 config->index.js->port 更改

npm run dev

# build for production with minification
# 打包项目

npm run build

# build for production and view the bundle analyzer report
# 打包项目，展示文件相互关系（查看包分析报告）

npm run build --report
```

## 项目结构说明

该项目由 [vue-cli](https://github.com/vuejs/vue-cli) 自动构建。

构建模式为 webpack (高配版)


