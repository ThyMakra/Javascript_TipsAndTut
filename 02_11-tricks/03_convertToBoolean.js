/* all values are truthy except 0, "", null, undefined, NaN, false */

const isTrue = !0;
const isFalse = !1;
const alsoFalse = !!0;
console.log(isTrue); // true
console.log(typeof true); // boolean
