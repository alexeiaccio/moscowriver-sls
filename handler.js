'use strict';

const writeSheet = require('./googleSheet');
const s4 = require('./s4');


module.exports.subscribe = (event, context, callback) => {

  const newValues = [
    [
      s4(),
      new Date().toISOString(),
      event.queryStringParameters.email
    ]
  ]

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Write!',
      input: event,
    }),
  };

  writeSheet(newValues);
  callback(null, response);
};
