let logProcess =require('./../util/log');

let problem_1 = (req, res, next) =>{

    let case_one = false;
    let case_two = true;
    let output = "";

    // case 1: - if vaue is actually at 56287 - output should be same
    if(case_one)
        output = 56287;

    // case 2: if value started from 40000 - them 50000    
    if(case_two)
        output = 46287;

    logProcess.generateLog()

    res.send(output + " Output");
}

module.exports = problem_1;