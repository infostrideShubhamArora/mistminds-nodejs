
let logProcess =require('./../util/log');

let problem_3 = (req, res, next) =>{

    logProcess.generateLog();
    logProcess.parseLog().then(data =>{
        res.send(data);
    })
};

module.exports = problem_3;