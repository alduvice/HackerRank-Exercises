'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    
    let dayOfFebruary = 0;
    let dd = 0;
    let mm = '09';
    
    if(year === 1918){
        dd = 26;
    }

    else if(year > 1918) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    dayOfFebruary = 29;
                    dd = 12;
                } else {
                    dayOfFebruary = 28;
                    dd = 13;
                  }
            } else {
                dayOfFebruary = 29;
                dd = 12;
              }
        } 
        else {
            dayOfFebruary = 28;
            dd = 13;
        }
    }
    else {
        if(year % 4 === 0){
            dayOfFebruary = 29;
            dd = 12;    
        }
        else {
            dayOfFebruary = 28;
            dd = 13;
        }
    }        
    return dd + '.' + mm + '.' + year;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
