const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on('process-subtitles', (event, paths) => {

    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(prepareData => groupWords(prepareData))
        // .then(words => groupWords(words))
        .then(groupedWords => 
            event.reply('process-subtitles', groupedWords))
})


//$ cd most-used-words
// $ npm run serve
// $ npm run electron:serve
 