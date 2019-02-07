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
    
    // Split up the lines
    file.split('\n').forEach(ee => {
        var dataPoint = {};

        // Split up the datapoints
        const elements = ee.split(',');
        if(ee.length != schema.length) {
            //console.error("Wrong schema length for given data!");
        }
        for(i = 0; i < schema.length; i++) {
            // Preprocessing
            var dataElement = schema[i].function(elements[i]);

            // Saving data into dataPoint{}
            dataPoint[schema[i].name] = dataElement;
        }
        // Push dataPoint{} to data[]
        data.push(dataPoint);
    });
});