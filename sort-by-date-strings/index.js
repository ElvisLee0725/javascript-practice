// Use Date.parse() to parse a formatted date string to milliseconds 1/1/1970

const arr = [
  {
    title: "What's SAP",
    date: "2019-11-21"
  }, {
    title: "Artificial Mountains",
    date: "2019-11-22"
  }, {
    title: "Simple text editor has 15k monthly users",
    date: "2010-12-31"
  }, {
    title: "A message to our customers",
    date: "2020-01-24"
  }, {
    title: "Alphabet earnings",
    date: "2019-11-23"
  }, {
    title: "The Emu War",
    date: "2019-10-21"
  }, {
    title: "Scaling to 100k Users",
    date: "2019-01-21"
  }
];

arr.sort((item1, item2) => {
  return Date.parse(item1.date) < Date.parse(item2.date) ? 1 : -1;
});

console.log(arr);
// console.log(Date.parse("2019-11-21"));
// console.log(Date.parse("2010-12-31"));