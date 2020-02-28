# fink/jest


## usage

`jest.config.js`
```js
module.exports = {
  ...

  // add fnk files
  moduleFileExtensions: ['js', 'fnk'],

  transform: {
    ...
    '^.+\\.fnk$': ['@fink/jest']
  },

  ...
};
```
