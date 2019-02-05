// Declaration of the schema of the CSV file
const schema = [
    {
        'name':'access',
        'function' : e => { return parseInt(e, 10) }
    },
    {
        'name':'start_time',
        'function' : e => { return Date.parse(e) }
    },
    {
        'name':'end_time',
        'function' : e => { return Date.parse(e) }
    },
    {
        'name':'duration',
        'function' : e => { return parseInt(e, 10) }
    },
    {
        'name':'duration',
        'function' : e => { return parseInt(e, 10) }
    },
    {
        'name':'threshold',
        'function' : e => { return parseInt(e, 10) }
    }
];

module.exports = {schema};