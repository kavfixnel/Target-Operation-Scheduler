// Import statements
const fs = require('fs');
const dateTime = require('date-and-time');

const schema = require('./schemas/csvSchema');

// Files to be processed
const files = [
    './data/dataShort.csv'
];

// Read in the CSV file(s)
var data = [];
files.forEach(e => {
    var file = fs.readFileSync(e, 'utf8');
    contents.split(',\r\n').forEach(e => {
        var dataPoint = {};
        for(i = 0; i < schema.length; i++) {
            // Preprocessing

            // Saving data into dataPoint{}

        }
        // Push dataPoint{} to data[]
        data.push(dataPoint);
    });
});

var line = nnn[5].split(',');
console.log(nnn[5]);
line.forEach(e => {
    console.log(typeof e == 'string');
});
