const test = require('tape');
const { cookie } = require('..');

test('test', t => {
  t.plan(4);

  const lambda = cookie()((event, context, callback) => {
    t.equal(typeof(event.cookies), 'object');
    t.equal(event.cookies.foo, '1');
    t.equal(event.cookies.bar, '2');

    callback(null, null);
  });

  lambda({
    headers: {
      cookie: 'foo=1; bar=2',
    },
  }, {}, (err, data) => {
    t.error(err);
  });
});
