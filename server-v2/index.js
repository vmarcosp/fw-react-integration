const fs = require('fs')
const browserSync = require('browser-sync').create();

browserSync.init({
  proxy: 'http://localhost:3002'
})


fs.watchFile('frontend.js', { interval: 500 }, () => {
  console.log('Dispatching reload...')
  browserSync.reload()
});
