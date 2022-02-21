const fs = require('fs');
const spawn = require('child_process').spawn; 

const originalFile = "./files/random.txt";
const sortedFile = "./files/random_sorted.txt";

let logProcess =require('./../util/log');

let problem_2 = (req, res, next) =>{
    const sortProcess = spawn('sort',  [originalFile]); 
    const writeStream = fs.createWriteStream(sortedFile, { flags : 'w' });
    
    sortProcess.stdout.setEncoding('utf8'); 
    sortProcess.stdout.on('data', (data)=>{
        writeStream.write(data) // breaking data into chunk and writing to new file
    }); 
    sortProcess.on("close", (err)=>{
        if(err) console.error(err);
 
        writeStream.end();
        logProcess.generateLog()
        res.send("sorted txt files");
    });


    // ----  when no sorting required

    // const readStream = fs.createReadStream('./files/random.txt')

    // writeStream.on('close', function () {
    //     console.log('All done!');
    // });

}

module.exports = problem_2;