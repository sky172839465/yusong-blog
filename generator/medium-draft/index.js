const fetch = require('node-fetch')
const { handleError } = require('../helper')
const {
  MEDIUM_PUBLICATION_ID,
  MEDIUM_ACCESS_TOKEN
} = process.env

// construct the URL to post to a publication
const MEDIUM_POST_URL = `https://api.medium.com/v1/publications/${MEDIUM_PUBLICATION_ID}/posts`

const content = `
<figure>
  <img src="https://images.unsplash.com/photo-1466629437334-b4f6603563c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2857&q=80" alt="Post Image"/>
  <figcaption>Photo by Karsten Würth (@karsten.wuerth) on Unsplash</figcaption>
</figure>

## **事情是這樣子的 **🧐

最近試著用 [JavaScript 寫 LeetCode](https://github.com/sky172839465/leetcode-in-js) ，每解開一個問題預計會產出題目的解答、解答的測試案例、解答的筆記並且將這些檔案的連結寫入專案的描述裡，一共 **1** 個資料夾加上 **5** 個檔案，如下圖所示：

https://gist.github.com/sky172839465/bc32f877a951152118fd63f936a1d4a4

## qq1234
`

const createPost = async () => {
  const response = await fetch(MEDIUM_POST_URL, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${MEDIUM_ACCESS_TOKEN}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
      'Accept-Charset': 'utf-8'
    },
    body: JSON.stringify({
      title: 'Title of my post',
      contentFormat: 'markdown',
      content: content,
      tags: ['Hello', 'World'],
      publishStatus: 'draft' // or "public" to immediately publish
    })
  })

  const messageData = await response.json()

  // the API frequently returns 201
  if ((response.status !== 200) && (response.status !== 201)) {
    console.error(`Invalid response status ${response.status}.`)
    throw messageData
  } else {
    console.log(JSON.stringify(messageData, null, 2))
  }
}

// {
//   data: {
//     id: 'f7067d0e9cce',
//     title: 'Title of my post',
//     authorId: 'YOUR_AUTHOR_ID_FROM_ME_API',
//     url: 'https://medium.com/@sky172839465/f7067d0e9cce',
//     canonicalUrl: '',
//     publishStatus: 'draft',
//     license: '',
//     licenseUrl: 'https://medium.com/policy/9db0094a1e0f',
//     tags: [
//       'world',
//       'hello'
//     ],
//     publicationId: 'YOUR_PUBLICATION_ID_FROM_USERS_PUBLICATIONS_API'
//   }
// }

handleError(createPost)
