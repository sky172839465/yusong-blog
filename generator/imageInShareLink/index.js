const fs = require('fs')
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
  const imagesFolder = `${targetFolder}/images`
  try {
    const html = fs.readFileSync(`${templateFolder}/index.html`, 'utf8')
    const htmlWithInlineCss = await inlineCss(html, {
      url: `file://${templateFolder}/`
    })
    // console.log(htmlWithInlineCss)
    if (!fs.existsSync(imagesFolder)) {
      fs.mkdirSync(imagesFolder)
    }
    await nodeHtmlToImage({
      output: `${imagesFolder}/shareLinkImage.jpg`,
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
