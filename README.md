<p align="center">
  <a href="https://yusong.io" rel="noopener">
 <img width=200px height=200px src="https://user-images.githubusercontent.com/9082423/62130266-3b27ff80-b30b-11e9-9a7c-b7582dcf6d0f.png" alt="Yusong IO logo"></a>
</p>

<h3 align="center">
  <a href="https://yusong.io">YUSONG.IO</a>
</h3>

<div align="center">

  [![Netlify Status][netlify-image]][netlify-url]
  [![Build Status][travis-image]][travis-url]

</div>

[netlify-image]: https://api.netlify.com/api/v1/badges/60b3ae1e-8068-4a92-acdd-8a048816c900/deploy-status
[netlify-url]: https://app.netlify.com/sites/yusong-io/deploys
[travis-image]: https://app.travis-ci.com/sky172839465/yusong.io.svg?branch=master
[travis-url]: https://travis-ci.com/sky172839465/yusong.io

---

<p align="center"> Records something about frontend development !
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
This project is yusong personal website's source code, made with gatsbyjs.

## 🏁 Getting Started <a name = "getting_started"></a>

1. Clone project
    ```cmd
    git clone https://github.com/sky172839465/yusong.io.git
    ```
1. Move to project
    ```cmd
    cd yusong.io
    ```
1. Install dependencies
    ```cmd
    npm install
    ```
1. Run in development
    ```cmd
    npm start
    ```
1. Build website
    ```cmd
    npm run build
    ```

## 🔧 Running the tests <a name = "tests"></a>
<!-- Explain how to run the automated tests for this system.

### Break down into end to end tests
Explain what these tests test and why

```
Give an example
``` -->

### And coding style tests
Test JavaScript coding style with [standardjs](https://standardjs.com/)

```cmd
npm run lint
```

Auto fix wrong style

```cmd
npm run lintfix
```

## 🎈 Usage <a name="usage"></a>
1. GraphQL GUI - http://localhost:8000/___graphql
1. manipulate `blog`, `note`, `about` content
    - local - http://localhost:8000/admin
    - online - http://yusong.io/admin

## 🚀 Deployment <a name = "deployment"></a>
When push commit to `master` branch, will trigger multiple service for continuous integration and deploy

  1. test coding style
      - success - `💯 Lint perfect`
  1. build website
  1. deploy website by running netlify cli
      - success - `✅ Deploy success`
  1. after deploy success, TravisCI and Netlify will update badge status on readme

      | Name | Badge |
      | :--- | :--- |
      | TravisCI | [![Build Status][travis-image]][travis-url] |
      | Netlify | [![Netlify Status][netlify-image]][netlify-url] |


## ⛏️ Built Using <a name = "built_using"></a>
- [Gatsby](https://www.gatsbyjs.org/) - JAM Website Framework
- [Bulma](https://bulma.io/) - CSS Framework
- [Styled Components](https://styled-components.com/) - CSS in JS Framework
- [TravisCI](https://travis-ci.com/) - Continuous integration
- [Netlify](https://www.netlify.com/) - Continuous deployment
- [Netlify CMS](https://www.netlifycms.org/) - CMS with Netlify in GitHub
- [TinaCMS](https://tinacms.org/) (dev) - realtime update markdown with hot reload

## ✍️ Authors <a name = "authors"></a>
- [@sky172839465](https://github.com/sky172839465)
