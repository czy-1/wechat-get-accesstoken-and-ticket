var request = require('request');
var AppID = '',
    AppSecret = '',
    access_token = '',
    ticket = '',
    Interval = null,
    error_sum = 0;
/*
* 全局错误处理方法，可以使用error方法覆盖
* */
var error_exception = function (addr, err) {
    error_sum++;
    if (error_sum>10) {
        clearInterval(Interval);
    }
    console.log(addr,err);
};
/*
* 请求access_token方法
* */
function get_access_token() {
    request('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential' + '&appid=' + AppID + '&secret=' + AppSecret, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            if (result.access_token) {
                access_token = result.access_token;
                get_ticket();
            } else {
                error_exception('Get AccessToken failed',body);
            }
            return;
        }
        error_exception('Get AccessToken failed',{error: error,response: response,body: body});
    });
}
/*
 * 请求ticket方法
 * */
function get_ticket() {
    request('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+access_token+'&type=jsapi', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            if (result.ticket) {
                ticket = result.ticket;
            } else {
                error_exception('Get Ticket failed',body);
            }
            return;
        }
        error_exception('Get Ticket failed',{error: error,response: response,body: body});
    });
}
/*
* 返回access_token方法
* */
exports.access_token = function () {
    return access_token;
};
/*
* 返回ticket方法
* */
exports.ticket = function () {
    return ticket;
};
/*
* 设置错误处理方法
* */
exports.error = function (callback) {
    error_exception = callback;
};
/*
* 设置AppID、AppSecret、全局初始化方法
* */
exports.config = function (ID, Secret, time) {
    if (AppID||AppSecret) {
        return false;
    }
    AppID = ID;
    AppSecret = Secret;
    get_access_token();
    Interval = setInterval(function () {
        get_access_token();
    },time);
    return true;
};
/*
* 强制刷新方法
* */
exports.refresh = function () {
    get_access_token();
};
/*
* 修改刷新时间方法
* */
exports.modify_time = function (time) {
    clearInterval(Interval);
    Interval = setInterval(function () {
        get_access_token();
    },time);
};