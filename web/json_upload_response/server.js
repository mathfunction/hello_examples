/*
	
	此程式碼需要使用 node.js 執行:
	============================================
	node server.js
	============================================	
	註 : 此處的 console.log 會印在 cmd/terminal 上

*/
// 埠連結碼
const PORT = 8888;

// 引入 node.js 模塊
var http = require('http'); 
var url = require('url');
var fs = require('fs');
var cp = require('child_process')

// 開啟 server  , req 代表 client 請求 , res 代表 server 回應 
var server = http.createServer(function (req, res){ 
	// =======================================
	// req.url 得到 client 傳的參數，實際上要解碼 + 過濾
	// =======================================
	// 連到 localhost , 寫入 client.html 程式碼
	if(req.url == "/"){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.readFile('./client.html',null,function(err,data){
			if(err){
				res.writeHead(404);
				res.write("File Not Found !!")
			}else{
				res.write(data);
			}
			res.end();
		})
	}else{
		// 檢查不同的 req.url 做不同的事 !! 
		if(req.url.split("/")[1] == "JSONFORMAT"){
			// 需要解析 URI !!
			var _dictJson = JSON.parse(decodeURI(req.url.split("/")[2]));
			console.log("Client -> Server")
			console.log(_dictJson);
			// ##########################################
			// do something with json file ...
				_dictJson["server"] = true;
				// run local .exe
				
				cp.exec("run.exe",function(err,stdout,stderr){
					let _exestr = stdout;
					console.log(_exestr);
				})
				
			// ##########################################
			
			// 回傳 string 給 client
			res.end(JSON.stringify(_dictJson));

		}else{
			// 例外處理 : 印出收到的資訊 
			console.log(decodeURI(req.url));
			res.end();
		}//end_else
	}
	
}).listen(PORT);
console.log('Node.js web server at port '+ PORT +' is running..')