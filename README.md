# url-fragment
Micro JavaScript module to make converting between URL strings and JavaScript objects easy


## Basic usage

To convert URL fragments from strings to objects.

```javascript
urlfragment.toJSON('a=1&b=2');
{ 'a': '1', 'b': '2' }
```

With a custom delimiter.

```javascript
urlfragment.toJSON('a=1;b=2', {delimiter: ";"});
{ 'a': '1', 'b': '2' }
```

Or from objects to strings.

```javascript
urlfragment.toString({a: 1, b: 2});
"a=1&b=2"
```

Again, the delimiter can be customised.

```javascript
urlfragment.toString({a: 1, b: 2}, {delimiter: ";"});
"a=1;b=2"
```

These two methods make life simpler when writing single page applications.
