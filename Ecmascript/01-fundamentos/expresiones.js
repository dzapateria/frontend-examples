/***********************************
|    Forzar respueta boleana
***********************************/
// Number
console.log(Boolean(1)); // => true
console.log(Boolean(0)); // => false
console.log(Boolean(Number("0"))); // => false

// String
console.log(Boolean("")); // => false
console.log(Boolean(" ")); // => true
console.log(Boolean("true")); // => true
console.log(Boolean("false")); // => true
console.log(Boolean(String(false))); // => true
console.log(Boolean("1")); // => true
console.log(Boolean("0")); // => true
console.log(Boolean(Number("1"))); // => true

// Boolean
console.log(Boolean(false)); // => false
console.log(Boolean(true)); // => true

// ------------------ NO PRIMITIVES TYPES

// Objects
console.log(Boolean({})); // => true
console.log(Boolean({
    a: true
})); // => true
console.log(Boolean({
    a: false
})); // => true
// array
console.log(Boolean([])); // => true
console.log(Boolean([1])); // => true
console.log(Boolean([0])); // => true
console.log(Boolean([true])); // => true
console.log(Boolean([false])); // => true
console.log(Boolean(['0'])); // => true
console.log(Boolean([false])); // => true

// Return function ( Example with IIFF)
console.log((function () {
    return false
})()); // => false
console.log(Boolean((function () {
    return 0
})())); // => false

console.log((function () {
    return true
})()); // => true
console.log(Boolean((function () {
    return 1
})())); // => true

// Otros
console.log(Boolean(undefined)); // => false
console.log(Boolean(null)); // => false
