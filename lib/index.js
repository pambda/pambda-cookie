const cookie = require('cookie');
const { get } = require('caseless-get');

exports.cookie = (options = {}) => {
  return next => (event, context, callback) => {
    const value = get(event.headers || {}, 'Cookie');

    event.cookies = cookie.parse(value || '');

    next(event, context, callback);
  };
};
