graceful [![Build Status](https://secure.travis-ci.org/fengmk2/graceful.png)](http://travis-ci.org/fengmk2/graceful)
=======

![logo](https://raw.github.com/fengmk2/graceful/master/logo.png)

Graceful exit when `uncaughtException` emit, base on `process.on('uncaughtException')`.

[domain failure](https://github.com/fengmk2/domain-middleware/blob/master/example/failure.js).

* jscoverage: [xx%](http://fengmk2.github.com/coverage/graceful.html)

## Install

```bash
$ npm install graceful
```

## Usage

Please see [connect_with_cluster](https://github.com/fengmk2/graceful/tree/master/example/connect_with_cluster) example.

This below code just for dev demo, don't use it on production env: 

```js
var connect = require('connect');
var graceful = require('graceful');

var app = connect()
.use()
.use(function(req, res){
  if (Math.random() > 0.5) {
    foo.bar();
  }
  setTimeout(function() {
    if (Math.random() > 0.5) {
      throw new Error('Asynchronous error from timeout');
    } else {
      res.end('Hello from Connect!');
    }
  }, 100);
  setTimeout(function() {
    if (Math.random() > 0.5) {
      throw new Error('Mock second error');
    }
  }, 200);
})
.use(function(err, req, res, next) {
  res.end(err.message);
});

app = app.listen(1984);

graceful({
  server: app,
  killTimeout: 30000,
});
```

## License 

(The MIT License)

Copyright (c) 2013 fengmk2 &lt;fengmk2@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.