# wechat-get-accesstoken-and-ticket  
Used to get and save the wechat accresstoken and ticket.  
用于获得和保存微信公众平台的accesstoken和ticket  
*中文文档在下面*
## Installation
wechat-get-accesstoken-and-ticket requires [Node.js](https://nodejs.org/) v6+ to run.
### clone
```sh
git clone https://github.com/czy-1/wechat-get-accesstoken-and-ticket.git
cd wechat-get-accesstoken-and-ticket-master
npm install
```
### download from zip
Download and unpack [wechat-accesstoken-and-ticket](https://github.com/czy-1/wechat-get-accesstoken-and-ticket/archive/master.zip).
```sh
cd wechat-get-accesstoken-and-ticket-master
npm install
```
## How to use
### demo
Open and modify `wechat-accesstoken-and-ticket/routers/index.js`,the line 5 is
```javascript
token.config('id','secret',3600000);
```
**Change from WeChat id and secret is a public platform**
```sh
cd wechat-get-accesstoken-and-ticket-master
npm start
```
Open http://localhost:3000/token or http://localhost:3000/ticket in a browser  
You will receive a string,this is your token or ticket
### use in other project
Copy `wechat-accesstoken-and-ticket/bin/wechat_token.js` to `yourprojectname/bin`  
Add in you need to use the location of the code
```javascript
var token = require('../bin/wechat_token');
token.config('id','secret',3600000);
```
**Pay attention to amend the id and secret to from a public platform**  
Then you can use `token.access_token()` or `token.ticket()` to get token or ticket
#### other function
* `.error`  
Use the `token.error(function)` to an error handling method.  
This will override the default error handling method.
* `.refresh`  
Use the `token.refresh()` to immediately flush the token and ticket.  
* `modify_time`  
Use the `token.modify_time(ms)` to modify the refresh frequency.  
**This will not immediately refresh token and ticket.**  
Advice immediately after calling this method called `token.refresh()` refresh token and ticket.  

***

## 中文文档
### 安装方法
wechat-get-accesstoken-and-ticket 需要 [node.js](http://nodejs.cn/) 才能运行  
### git clone
```sh
git clone https://github.com/czy-1/wechat-get-accesstoken-and-ticket.git
cd wechat-get-accesstoken-and-ticket-master
npm install
```
### 下载zip
下载并解压 [wechat-accesstoken-and-ticket](https://github.com/czy-1/wechat-get-accesstoken-and-ticket/archive/master.zip).  
执行
```sh
cd wechat-get-accesstoken-and-ticket-master
npm install
```
### 如何使用
#### 示例
打开`wechat-accesstoken-and-ticket/routers/index.js`，第5行的内容为
```javascript
token.config('id','secret',3600000);
```
**将这里的id和secret修改为你从微信公众平台官网上获得的。**   
执行
```sh
cd wechat-get-accesstoken-and-ticket-master
npm start
```
在浏览器中打开 http://localhost:3000/token 或者 http://localhost:3000/ticket ,返回的字符串即为token或者ticket。
#### 在其他项目中使用
将 `wechat-accesstoken-and-ticket/bin/wechat_token.js` 复制到 `你的项目名称/bin` 下  
在需要使用的位置添加代码  
```javascript
var token = require('../bin/wechat_token');
token.config('id','secret',3600000);
```
注意将id和secret修改为你从微信公众平台上获得的  
之后就可以使用 `token.access_token()` 或者 `token.ticket()` 来获得token和ticket  
#### 其他方法
* `.error`  
使用 `token.error(function)` 传入一个错误处理方法,用以替换默认的错误处理方法。  
* `.refresh`  
使用 `token.refresh()` 来立即刷新token和ticket。  
* `modify_time`  
使用 `token.modify_time(ms)` 来修改刷新token和ticket的频率。  
**这将不会立即刷新token和ticket**  
建议使用该方法后立即调用 `token.refresh()` 刷新一次token和ticket。  
