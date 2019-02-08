const timeStamp1 = new Date();

// Load the environment variables
require('dotenv').config();

// Import statements
const fs = require('fs');
const dateTime = require('date-and-time');

const schema = require('./schemas/csvInputSchema.js');

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
        if(elements.length != schema.length) {
            console.error("Wrong schema length for given data!");
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

// Sort the data array based on 
data.sort((e1, e2) => {
    return e1.start_time - e2.start_time;
});

// Check if there are any overlapping time intervals
for(i = 0; i < data.length - 1; i++) {
    if(data[i].end_time > data[i+1].start_time) {
        console.error("Overlapping time intervals at the "+i+"th and the "+(i+1)+"th index");
    }
}

// Create the output string
var outStr = "Event Time (UTC),Duration of Mode (s),Active mode\n";
for(i = 0; i < data.length-1; i++) {
    var line1 = data[i].start_time+","+data[i].duration+",acive mode\n";
    var line2 = data[i].end_time+","+((data[i+1].start_time-data[i].end_time)/1000)+",cruise mode\n";
    outStr += line1 + line2;
}
var line1 = data[data.length-1].start_time+","+data[data.length-1].duration+",acive mode\n";
var line2 = data[data.length-1].end_time+",,cruise mode\n";
outStr += line1 + line2;

// Save to ouput.csv file
fs.writeFile('output.csv', outStr, err => {
    if(err) {
        console.error("Error when writing the output file");
    }

    const timeStamp2 = new Date();
    console.log("output.csv sucessfully created!");
    console.log("Time Spent: "+((timeStamp2-timeStamp1)/1000)+"s");
});