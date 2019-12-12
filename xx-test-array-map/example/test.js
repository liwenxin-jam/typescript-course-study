"use strict";
exports.__esModule = true;
var arrayMap = require("../dist/test-array-map");
var result = arrayMap([1, 2], function (item) {
    return item + 2;
});
console.log(result);
