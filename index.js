var express = require('express');
var open = require('open');
var app = express();

app.get('/', function(req, res) {
    var key = req.query.key;
    var info = {
        status: '200 表示成功，0 表示失败 50005 表示服务器繁忙',
        data: {
            name: '名称',
            list: [{
                deviceno: '设备号，包括手机固话宽带等',
                devicetype: '设备类型类型'
            }]
        },
        info: '备注信息'
    };
    var params = {
        status: 200,
        data: {
            name: '张三',
            list: [{
                deviceno: '1772102****',
                devicetype: '手机'
            }]
        },
        info: key == 'debug' ? info : ''
    };
    res.json(params);
});

//debug true  false
var formatdata = function(debug) {
    return {
        status: debug ? '200 表示成功，0 表示失败 50005 表示服务器繁忙' : 0,
        data: {
            name: debug ? '名称' : '',
            list: debug ? [{
                deviceno: '设备号，包括手机固话宽带等',
                devicetype: '设备类型类型'
            }] : []
        },
        info: debug ? '备注信息' : ''
    };
};

app.get('/data', function(req, res) {
    var key = req.query.key;
    var params = formatdata(false);
    params.status = 200;
    params.data = {
        name: '张三',
        list: [{
            deviceno: '1772102****',
            devicetype: '手机'
        }]
    };
    params.info = formatdata(true)

    res.json(params);
});


var server = app.listen(3000, function() {
    var host = '127.0.0.1';
    var port = server.address().port;
    var url = 'http://' + host + ':' + port;
    console.log('Example app listening at' + url);
    open(url);
});