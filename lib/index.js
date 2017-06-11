const cookie = require('cookie');

exports.cookie = (options = {}) => {
  return next => (event, context, callback) => {
    event.cookies = cookie.parse((event.headers || {}).Cookie || '');

    next(event, context, callback);
  };
};
