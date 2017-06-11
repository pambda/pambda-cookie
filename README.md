# pambda-cookie

Cookie parser for [Pambda](https://github.com/pambda/pambda).

## Installation

```
npm i pambda-cookie -S
```

## Usage

``` javascript
import { compose, createLambda } from 'pambda';
import { cookie } from 'pambda-cookie';

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
