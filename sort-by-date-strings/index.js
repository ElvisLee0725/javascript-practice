// Use Date.parse() to parse a formatted date string to milliseconds 1/1/1970

const arr = ["2019-11-21", "2019-11-22", "2010-12-31", "2020-01-24", "2019-11-23", "2019-10-21", "2019-01-21"];

arr.sort((d1, d2) => {
  return Date.parse(d1) < Date.parse(d2) ? 1 : -1;
});

console.log(arr);
// console.log(Date.parse("2019-11-21"));
// console.log(Date.parse("2010-12-31"));