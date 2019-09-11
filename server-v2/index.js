const fs = require('fs')
const path = require('path')
const browserSync = require('browser-sync').create();

browserSync.init({
  proxy: 'http://localhost:3002'
})


fs.watchFile(path.join(__dirname, 'frontend.js'), { interval: 500 }, () => {
  console.log('Dispatching reload...')
  browserSync.reload()
});
