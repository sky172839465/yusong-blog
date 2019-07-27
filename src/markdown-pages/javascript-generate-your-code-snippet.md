---
path: "/post/javascript-generate-your-code-snippet"
date: "2019-06-07T09:00:00+08:00"
title: "JavaScript 產生你的程式碼片段"
description: "透過 JavaScript 產生程式碼片段後，可以有效提升作業的效率與降低出錯的機率 🤖"
tags: ["Code Snippet", "JavaScript", "Nodejs", "Leetcode", "Front End Development"]
---
# JavaScript 產生你的程式碼片段

<figure>
  <img src="https://images.unsplash.com/photo-1466629437334-b4f6603563c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2857&q=80" alt="Post Image"/>
  <figcaption>Photo by Karsten Würth (@karsten.wuerth) on Unsplash</figcaption>
</figure>

## **事情是這樣子的 **🧐

最近試著用 [JavaScript 寫 LeetCode](https://github.com/sky172839465/leetcode-in-js) ，每解開一個問題預計會產出題目的解答、解答的測試案例、解答的筆記並且將這些檔案的連結寫入專案的描述裡，一共 **1** 個資料夾加上 **5** 個檔案，如下圖所示：

https://gist.github.com/sky172839465/bc32f877a951152118fd63f936a1d4a4

1. [src/easy/0001-two-sum/index.js](https://github.com/sky172839465/leetcode-in-js/blob/demo/src/easy/0001-two-sum/index.js) 題目的解答

1. [src/easy/0001-two-sum/README.md](https://github.com/sky172839465/leetcode-in-js/blob/demo/src/easy/0001-two-sum/README.md) 解答的筆記

1. [src/easy/index.js](https://github.com/sky172839465/leetcode-in-js/blob/demo/src/easy/index.js) 給測試案例使用的解答共同的出口

1. [__tests__/easy/0001-two-sum.test.js](https://github.com/sky172839465/leetcode-in-js/blob/demo/__tests__/easy/0001-two-sum.test.js) 解答的測試案例，確保解答符合需求

1. [README.md](https://github.com/sky172839465/leetcode-in-js/blob/demo/README.md) 專案的描述，當有新解答時描述最底下的表格應跟著新增一筆

連結上是**每次**要開始新的一題需要先準備好的檔案內容，真的非常枯燥又繁瑣，有時候還會漏了某個檔案，尤其是加入新的專案描述…這時候就會像面對考試時會突然覺得桌面的髒亂到不馬上整理不行，我也突然產生了一股不想辦法解決這些重複性高的工作不行的使命感…

## 教練我只想寫 Code 😭

在想要怎麼達成這個使命時，想到 [Angular CLI](https://cli.angular.io/) 協助開發的體驗挺好的！只要在指令列輸入 ng g c new-cmp 就會幫你把新的檔案建立好，並且連 import module 等等的語法都寫好了！

稍微看一下 Angular CLI 的[程式碼](https://github.com/angular/angular-cli/blob/db344641f428105c007cf1a45c41673ecdf240bf/scripts/templates.ts#L27)後發現，其實是透過 NodeJS 產生檔案，再來只需要像印出九九乘法表把內容組一組輸出成檔案就好了！

## 透過 JavaScript 產生程式碼片段 🤩

只要知道底下 **2** 件事即可產生任何客製化的程式碼片段：

1. 要在瀏覽器外執行 JavaScript 可以透過 node index.js 在 NodeJS 上執行

1. 使用 NodeJS 的 [File System API](https://nodejs.org/api/fs.html) 產生檔案

首先試著產生一個 hello world 的文字檔

https://gist.github.com/sky172839465/abb6bca50b21c7cef3170e80042c74a9

![產生 hello world](https://cdn-images-1.medium.com/max/2400/1*V88sV8GEPA6eiXSg9P3_Lw.gif)*產生 hello world*

再來把前面提過九九乘法表在 markdown 上實作一次吧！

markdown 的表格欄位如果變多了寫起來很容易少寫或多寫，所以能透過程式自動產生是最理想的 😍

https://gist.github.com/sky172839465/b3f761ac2a9e87a519f112955c1bd6ff

![產生九九乘法表](https://cdn-images-1.medium.com/max/2400/1*S60hGT8tPP85etefvxtLAQ.gif)*產生九九乘法表*

最後加入一些套件，玩點有趣的花式操作 🌈，執行後詢問使用者問題並將回覆結果做成 JavaScript Object 的格式寫入檔案 ans.js

1. npm init 初始化 package.json

1. npm i --save-dev colors inquirer 安裝套件

1. JavaScript only !

https://gist.github.com/sky172839465/a4b16de76f83b3338b7411df70130f87

* [colors](https://github.com/Marak/colors.js)：讓執行過程中印在終端機上的 console.log 加上不同色彩

* [Inquirer](https://github.com/SBoudrias/Inquirer.js/)：可以寫入問題讓使用者填寫、選擇答案、驗證回答、修改內容…etc

![將提問的回答寫入檔案並宣告成 JavaScript Object](https://cdn-images-1.medium.com/max/2400/1*jM7ZD1r3ZxAct-d8D_7lRw.gif)*將提問的回答寫入檔案並宣告成 JavaScript Object*

## 化繁為簡後 ✨

現在來看看，能自動產生程式碼片段後，寫 LeetCode 前要準備好那些檔案變得多麽的輕鬆 🎉

<center>
  <iframe class="iframe" src="https://www.youtube.com/embed/j5XeZQNUx2E" allowfullscreen></iframe>
</center>

加入[提問](https://github.com/SBoudrias/Inquirer.js)來決定產生的內容，有 **3** 個原因：

1. 驗證資料格式、避免輸入錯誤資訊，結果檔案已經被產生出來

1. 內容太多了，問題的長度如果太長，整行指令看起來很不方便

1. 一段時間沒開發後可能已經不記得參數要放什麼了

👉 影片中產生檔案的[主程式碼](https://github.com/sky172839465/leetcode-in-js/blob/master/generator/solution/index.js)

## 結尾 🏁

好了！這下子我終於可以心無旁騖專心地 LeetCode 了！除非桌面又開始令人感到凌亂不堪 😏

希望這篇文章可以協助你打造自己的程式碼片段，把重複性高的工作透過熟悉的 JavaScript 整理後自動產生提高作業的生產力與專注力，並且降低出錯與遺漏的機率，如果有對這篇文章有任何建議或疑問歡迎在底下留言與分享，謝謝 🙌
