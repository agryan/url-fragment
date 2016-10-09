# url-fragment
Micro JavaScript module to make converting between URL strings and JavaScript objects easy


## Basic usage

To convert URL fragments from strings to objects.

```
urlfragment.to_object('a=1;b=2');
{ 'a': '1', 'b': '2' }
```

Or from objects to strings.

```
urlfragment.to_fragment({a: 1, b: 2});
"a=1;b=2"
```

These two methods make life simpler when writing single page applications.
