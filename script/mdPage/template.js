const moment = require('moment')
const template = ({ fileName, title = 'post' }) => `---
path: "/post/${fileName}"
date: "${moment().format()}"
title: "${title}"
---
`

module.exports = template
