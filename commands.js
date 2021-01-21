var fs = require("fs")
let request = require('request');


var commands = {
    pwd: function (pwd, filename) {
        var pwd = process.cwd(); // remueve la nueva línea
        process.stdout.write('You typed: ' + pwd);
        
    },
    date: function (date, filename) {
        var date = new Date()
        // remueve la nueva línea
        process.stdout.write('You typed: ' + date);
    
    },

    ls: function (ls, filename ) {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                process.stdout.write(file.toString() + "\n");
            })
            
        });
    },

    echo: function(param){
       process.stdout.write(param);
    },
    cat: function (param) {
        fs.readFile('./'+ param, (err, filename) => {
            if (err) throw err;
            process.stdout.write(filename);
            
          });
    },
    head: function (param) {
        fs.readFile('./'+ param, (err, filename) => {
            if (err) throw err;
           let spliteada= filename.toString().split("\n")
           let sliceada= spliteada.slice(0,11).join("\n")       
            process.stdout.write(sliceada);
            
          });

    },
    tail: function (param) {
        fs.readFile('./'+ param, (err, filename) => {
            if (err) throw err;
           let spliteada= filename.toString().split("\n")
           let sliceada= spliteada.slice(spliteada.length-10,spliteada.length).join("\n")       
            process.stdout.write(sliceada);
            
          });
    },
    curl: function(param){
       
        request(param.toString(), (err, response, body)=>{
            if (err) throw err
            process.stdout.write(body + '\n');
        })
    }

}



module.exports = commands;