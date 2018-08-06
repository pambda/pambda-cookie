# pambda-cookie

Cookie parser for [Pambda](https://github.com/pambda/pambda).

## Installation

```
npm i pambda-cookie
```

## Usage

``` javascript
const { compose, createLambda } = require('pambda');
const { cookie } = require('pambda-cookie');

export const handler = createLambda(
  compose(
    cookie({}),
    next => (event, context, callback) => {
      // Do something with event.cookies.
    }
  )
);
```

## License

MIT
