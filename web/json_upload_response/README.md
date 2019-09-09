### 範例教學:

- Client 上傳 JSON 檔案給 Server 並回傳 JSON !!

### 使用情境:

​	本地端雙視窗，後端運算結果(server.js)串接到前端瀏覽器顯示(client.html)

| 前端                        | 後端                                                |
| --------------------------- | --------------------------------------------------- |
| javascript API / 瀏覽器 CDN | javascript  / 控制命令列，執行本地端程式 / 其他語言 |

### 預備套件:

- Chrome / FireFox 瀏覽器

- 下載並安裝 Node.js :  <https://nodejs.org/en/> 


### 執行方式:

1. 打開終端機(cmd/terminal)，啟動 Server : 

```bash
node server.js  
```

2. 開啟瀏覽器，並在網址端輸入 <http://localhost:8888/> ，連線成功會寫入 client.html 檔案!!  ( 註: 8888 為 PORT 碼 , 可在 server.js 程式碼修改 )

3. 選擇上傳 data.json 檔(也可以放本地端 .json)，並按下 \[確認\]，此時在

   - 終端機上應該會顯示 data.json 資訊，代表後端接收到 json 資訊

   - 瀏覽器 Console (Chrome 開發人員工具)

     應該會顯示 server 運算後回傳的 json  資訊，且 json key= "server"值會改為 true 值(代表已經送過 server 並回傳 !! )

### 程式碼概述:

- server.js (後端)

- client.html (前端)






