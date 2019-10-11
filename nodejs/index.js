'use strict';
const util = require('util');
const env = require('./env.js')
const {
  URLSearchParams
} = require('url');

exports.handler = (event, context, lambda_return_cb) => {
  const BEHAVIORPATH = env.CF_PREFIX;
  const cfrequest = event.Records[0].cf.request;
  console.log(`Checking ${BEHAVIORPATH} against ${cfrequest.uri}`);
  if(cfrequest.uri.indexOf(BEHAVIORPATH) === 0){
    cfrequest.uri = cfrequest.uri.substring(BEHAVIORPATH.length)
  }

  console.log(cfrequest.uri);
  lambda_return_cb(null, cfrequest);
  return true;
};
