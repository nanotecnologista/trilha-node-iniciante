 var fs = require('fs')

// fs = file system

/* Criando um arquivo */
// fs.writeFile('data.txt', 'Hello World from Juba', function (err){
//     if(err){
//         throw err
//     }
// })

/* Lendo um arquivo */
// fs.readFile('data.txt', function (err, data){
//     if(err){
//         throw err
//     }

//     console.log(data.toString('utf8'))
// })


/* Lendo vários arquivos */
// fs.readdir('.',function (err, files){
//     if(err){
//         throw err
//     }
//     for (var file in files){
//         console.log (files[file])
//     }
// })

/* Buscando apenas arquivos .js */
fs.readdirSync('.',).filter (function(file){
    return (file.endsWith('.js'))}).forEach(function(file){
        console.log(file)
    })