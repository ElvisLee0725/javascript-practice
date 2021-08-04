const expect = (result) => {
  return {
    toBe: function(expected) {
      if(result !== expected) {
        throw new Error(`Expected ${expected} but got ${result} instead`);
      }
    }
  }
}

const sum = (a, b) => a + b;

const test = (title, callback) => {
  try {
    callback();
    console.log(`Passed: ${title}`);
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

test("Should add up two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});



