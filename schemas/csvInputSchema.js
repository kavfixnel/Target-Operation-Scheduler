/*
  Schema must follow these rules
  (1) Each attrbute must be in the format of
      {
          'name':'...',
          'funciton': e => some preprocessing function
      }
  (2) There must be an attribute with name:'start_time'
  (3) There must be an sttribute with name:'end_time
*/

// Declaration of the schema for the CSV input file(s)
const schema = [
    {
        'name':'start_time',
        'function' : e => { return Date.parse(e) }
    },
    {
        'name':'end_time',
        'function' : e => { return Date.parse(e) }
    },
    {
        'name':'lat',
        'function' : e => { return parseFloat(e, 10) }
    },
    {
        'name':'log',
        'function' : e => { return parseFloat(e, 10) }
    }
];

module.exports = schema;