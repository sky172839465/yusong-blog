const fs = require('fs')
const path = require('path')
const inlineCss = require('inline-css')
const nodeHtmlToImage = require('node-html-to-image')

const generateShareImage = async (imageInfo) => {
  const {
    targetFolder,
    templateFolder,
    title,
    websiteUrl,
    category
  } = imageInfo
  try {
    const html = await fs.readFileSync(`${templateFolder}/index.html`, 'utf8')
    const htmlWithInlineCss = await inlineCss(html, {
      url: `file://${templateFolder}/`
    })
    // console.log(htmlWithInlineCss)
    await nodeHtmlToImage({
      output: path.join(targetFolder, '/images/shareLinkImage.jpg'),
      html: htmlWithInlineCss,
      content: {
        title,
        websiteUrl,
        category
      },
      puppeteerArgs: {
        defaultViewport: {
          width: 1200,
          height: 630
        }
      }
    })
  } catch (e) {
    console.log(e)
  }
}

module.exports = generateShareImage
