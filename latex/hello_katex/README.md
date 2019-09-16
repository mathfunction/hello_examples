# Javascript + Katex = latex on browser 範例 !!

### Katex 使用方法概述:

1. 把整個 katex 資料夾複製到你要的目錄， [YourPath] = 資料夾絕對路徑    

2. 在 html-head 裡引入兩個 js 檔案( katex.min.js , auto-render.min.js )，一個 css 檔案 ( katex.min.css ) ，此為本地端 = 離線還可用方法，其它引入 katex 方法可看官網 !!

   ```html
   <head>
   	<script src="[YourPath]/katex/katex.min.js"></script>
   	<script src="[YourPath]/katex/contrib/auto-render.min.js"> </script>
   	<link type="text/css" rel="stylesheet" href="[YourPath]/katex/katex.min.css"></script>
   </head>
   ```


3. 在 html-body想顯示的公式的地方創建 \<span\> 標籤，並自行給它 id 

   ```html
   <body>
       <span id="my_first_formula"> </span>
       
   </body>
   ```

4. 在 javascript 程式碼 區塊，使用 katex.render 函式，即可顯示數學式 !!

   ```javascript
   katex.render("Your Latex Code",document.getElementById("my_first_formula"))
   
   // document.getElementById 為常見 javascript 語法，可自行 Google !!
   // "Your Latex Code" 是你要寫的 latex 字串 (不需要包$,$$) 
   // 需要跳脫字元，所以 latex某些語法如: 非單斜線 \sum 需要雙斜線 \\sum 
   ```

### 範例碼: 

​	解壓縮後，用瀏覽器打開 hello_katex.html 會出現效果 !! 

​	範例實作可參考 hello_katex.html , katex_formulas.js ，可有按鈕互動顯示功能 !!

### 與 MathJax 比較:  

1.  Katex 顯示效能比較快(感覺順暢) !!
2.  Katex 顯示樣式比較好看 !!
3.  MathJax 支援 latex 語法集比較多!!

## 相關連結: 

Katex 官網: https://katex.org/

MathJax 官網: <https://www.mathjax.org/>