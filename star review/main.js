const stars = document.querySelectorAll('.star-area li');

stars.forEach((star) => {
  star.addEventListener('click', (e) => {
    console.log(e.target.dataset.rating);
  });
});

Array.prototype.myReduce = function(callback, start = 0) {
  for(const n of this) {
    start = callback(start, n); 
  }
  return start;
}

let arr = [1, 2, 3, 4, 5];
let res = arr.myReduce((acc, val) => {
  return acc + val;
}, 4);

console.log(res);