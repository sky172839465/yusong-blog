const SITE_URL = 'http://yusong.io'

const META_KEY = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  AUTHOR: 'author',
  KEYWORDS: 'keywords',
  TYPE: 'type',
  SITE_URL: 'siteUrl',
  SITE_NAME: 'siteName',
  IMAGE: 'image',
  ID: 'id'
}

const DEFAULT_META = {
  [META_KEY.TITLE]: 'YUSONG.IO',
  [META_KEY.DESCRIPTION]: `Hi I'm Yusong, a frontend developer and ACGN lover !`,
  [META_KEY.AUTHOR]: 'Yusong Hsu',
  [META_KEY.KEYWORDS]: 'frontend-development, gatsbyjs, react',
  [META_KEY.TYPE]: 'website',
  [META_KEY.SITE_URL]: SITE_URL,
  [META_KEY.SITE_NAME]: `Yusong's Blog`,
  [META_KEY.IMAGE]: `${SITE_URL}/icons/icon-256x256.png`,
  [META_KEY.ID]: 'sky172839465'
}

module.exports = { META_KEY, DEFAULT_META }
