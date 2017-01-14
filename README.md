# rest-api-doc
> 接口即文档

## 安装
```
npm install 
```

## 运行
```
node index
```

## 访问
[http://127.0.0.1:3000/](http://127.0.0.1:3000/)
结果：
```json
{
	"status": 200,
	"data": {
		"name": "张三",
		"list": [{
			"deviceno": "1772102****",
			"devicetype": "手机"
		}]
	},
	"info": ""
}
```
[http://127.0.0.1:3000/?key=debug](http://127.0.0.1:3000/?key=debug)
结果：
```json
{
	"status": 200,
	"data": {
		"name": "张三",
		"list": [{
			"deviceno": "1772102****",
			"devicetype": "手机"
		}]
	},
	"info": {
		"status": "200 表示成功，0 表示失败 50005 表示服务器繁忙",
		"data": {
			"name": "名称",
			"list": [{
				"deviceno": "设备号，包括手机固话宽带等",
				"devicetype": "设备类型类型"
			}]
		},
		"info": "备注信息"
	}
}
```

## 接口即文档
1. 同一个接口，通过传入不通的参数，呈现不同的内容，少写文档，实时更新
2. 参数中添加key=debug时，将info:信息呈现，否则，info信息为空。
3. 在与第三方对接时，可以针对不同的团队，给出不通的key，防止接口信息泄露

