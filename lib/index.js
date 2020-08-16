const cookie = require('cookie');
const { get } = require('caseless-get');
const { callbackify } = require('lambda-callbackify');

exports.cookie = (options = {}) => {
  return next => {
    next = callbackify(next);

    return (event, context, callback) => {
      if (event.cookies && Array.isArray(event.cookies)) {
        event.cookies = event.cookies.reduce((cookies, value) => {
          return Object.assign(cookies, cookie.parse(value));
        }, {});
      } else {
        const value = get(event.headers || {}, 'Cookie');

        event.cookies = cookie.parse(value || '');
      }

      next(event, context, callback);
    };
  };
};
