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

  writeSheet('Subscribtions!A:C', newValues);
  callback(null, response);
};

module.exports.feedback = (event, context, callback) => {

  const newValues = [
    [
      s4(),
      new Date().toISOString(),
      event.queryStringParameters.name,
      event.queryStringParameters.email,
      event.queryStringParameters.message,
    ]
  ]

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Write!',
      input: event,
    }),
  };

  writeSheet('Feedbacks!A:E', newValues);
  callback(null, response);
};
