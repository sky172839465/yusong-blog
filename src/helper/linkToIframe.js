import _ from 'lodash'
const PATTERN = {
  GIST: '<a href="https://gist.github.com.*</a>',
  YOUTUBE: '<a href="https://www.youtube.com/embed/.*</a>'
}
const linkToIframe = html => {
  const convertedHtml = _.flow(
    html => _.replace(html, new RegExp(PATTERN.GIST, 'g'), match => (`
      <div class="resp-container">
        <iframe
          src="data:text/html;charset=utf-8,<body><script src='${match.match(/href="(.*)"/)[1]}.js'></script></body>"
        >
        </iframe>
      </div>
    `)),
    replaceGistHtml => _.replace(replaceGistHtml, new RegExp(PATTERN.YOUTUBE, 'g'), match => (`
      <div class="resp-container">
        <iframe src='${match.match(/href="(.*)"/)[1]}' allowfullscreen></iframe>
      </div>
    `))
  )(html)
  return convertedHtml
}

/**
 * <iframe frameborder="0" src="data:text/html;charset=utf-8,<body><script src='https://gist.github.com/sky172839465/bc32f877a951152118fd63f936a1d4a4.js'></script></body>"></iframe>
 */

export default linkToIframe
