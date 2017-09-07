let fs = require('fs')
let path = require('path')

// 读取文件
let readFile = function (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf-8', function (err, data) {
      if (err) {
        resolve('error')
      } else {
        resolve(data)
      }
    })
  })
}

readFile('./css/oldCss.css').then((data) => {
  if (data !== 'error') {
    // 替换 去掉webkit firefox 勉强浏览
    let str = data.replace(/(-webkit-)(clip-path:)(.*)(polygon\((.*)\))/g, "$1$2$3$4; $2$3$4")
    // 并写入文件
    fs.writeFile(path.join(__dirname + '/css', 'main.css'), str, function (err) {
      if (err) throw err
      console.log("Success!")
    })
  }
})
