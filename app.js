// Import statements
const fs = require('fs');
const dateTime = require('date-and-time');

// Declaration of variables
const schema = {
    'Access': function(e) {
        return parseInt(e, 10);
    },
    
};
const files = [
    'dataShort.csv'
];
var data = schema;

// Read in the CSV file(s)
var nnn;
files.forEach(e => {
    var contents = fs.readFileSync('dataShort.csv', 'utf8');
    nnn = contents.split(',\r\n');

});

var line = nnn[5].split(',');
console.log(nnn[5]);
line.forEach(e => {
    console.log(typeof e == 'string');
});
