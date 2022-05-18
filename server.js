var http = require('http');
var exec = require('child_process').exec;
var cmd = 'git pull && npm i && npm run build';

http
	.createServer(function (req, res) {
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('hi');
		exec(cmd, function (error, stdout, stderr) {
			// 获取命令执行的输出
			console.log({ error, stdout, stderr });
		});
	})
	.listen(4567, 'http://120.76.41.224/');
