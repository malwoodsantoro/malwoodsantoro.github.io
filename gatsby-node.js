const express = require('express')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'))
}