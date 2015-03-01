merge-meshes
============
### Merges multiple meshes into one

Install
-------

```bash
$ npm install merge-meshes
```

Usage
-----

```javascript
var mergeMeshes = require('merge-meshes');

var meshA = {
  cells: [
    [0, 1, 2]
  ],
  positions: [
    [ 0, 0, 0],
    [ 1, 0, 0],
    [ 0, 1, 0],
  ]
}

var meshB = {
  cells: [
    [0, 1, 2],
  ],
  positions: [
    [ 0, 0, 0],
    [-1, 0, 0],
    [ 0, 1, 0]
  ]
}

mesh = mergeMeshes([meshA, meshB]);

console.log(mesh);
/*
{ 
  cells: [ 
    [0, 1, 2], 
    [3, 4, 5] 
  ],
  positions: [ 
    [ 0, 0, 0],
    [ 1, 0, 0],
    [ 0, 1, 0],
    [ 0, 0, 0],
    [-1, 0, 0],
    [ 0, 1, 0] 
  ] 
}
*/
```
