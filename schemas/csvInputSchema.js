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

module.exports = schema;