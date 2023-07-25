const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.js'
)

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  output: 'export',
})
