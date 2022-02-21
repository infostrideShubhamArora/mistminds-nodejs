const fs= require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname + "/stats.txt");

// read json object from file
let readStats = () => {
  let result = {}
  try {
      result = JSON.parse(fs.readFileSync(FILE_PATH));
  } catch (err) {
      console.error(err)
  }
  return result
}

// dump json object to file
let dumpStats = (stats) => {
  try {
      fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: 'w+' })
  } catch (err) {
      console.error(err)
  }
}

// update data into .log file
let generateLog = () =>{
    let stats = readStats();
    stats = parseInt(stats) ? parseInt(stats) + 1 : 1
    dumpStats(stats);
    logs(stats);
}


// write logs data into log file
let logs = function(d) { //
    let input = `SprintsController => show action ran ${d} times` + '\n';
    fs.writeFileSync(__dirname + '/logging/development.log',input) 
};


// read / parse .log file to view data
let parseLog = () =>{
    const parse_path = path.resolve(path.join(__dirname + "/logging/development.log"), ) 
    return new Promise((resolve, reject) =>{
        fs.readFile(parse_path, 'utf8', function (err,data) {
            if (err) {
              return console.log(err);
            }
            resolve(data)
          });
    })
}

module.exports = {
    readStats,
    dumpStats,
    parseLog,
    logs,
    generateLog
}