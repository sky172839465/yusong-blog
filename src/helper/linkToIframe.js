const linkToIframe = html => {
  const convertedHtml = html.replace(
    new RegExp(`<a href="https://gist.github.com.*</a>`, 'g'),
    match => {
      return `
        <div class="iframe-container">
          <iframe
            class="iframe"
            src="data:text/html;charset=utf-8,<body><script
            src='${match.match(/href="(.*)"/)[1]}.js'></script></body>">
          </iframe>
        </div>
      `
    }
  )
  return convertedHtml
}

/**
 * <iframe frameborder="0" src="data:text/html;charset=utf-8,<body><script src='https://gist.github.com/sky172839465/bc32f877a951152118fd63f936a1d4a4.js'></script></body>"></iframe>
 */

export default linkToIframe
