// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

// Use 3 strings to store characters in 3 rows
// Iterate all words from input array. For the first letter, check if it's in row 1 or 2 or 3.
// Iterate each words from index 1 and see if each letter is from the same row as the first letter
// If we finish the current word, add it to result array
// Edge case: When the current word has only 1 letter, add to result
// Time: O(mn) while m is the length of word, n is the length of input array, Space: O(n);
var findWords = function(words) {
  const row1 = "qwertyuiopQWERTYUIOP";
  const row2 = "asdfghjklASDFGHJKL";
  const row3 = "zxcvbnmZXCVBNM";
  let res = [];
  
  for(let i = 0; i < words.length; i++) {
      let curWord = words[i];
      let curRow = null;
      if(row1.indexOf(curWord.charAt(0)) !== -1) {
          curRow = 1;
      }
      else if(row2.indexOf(curWord.charAt(0)) !== -1) {
          curRow = 2;
      }
      else {
          curRow = 3;
      }
      
      // Edge Case: only 1 character in this word
      if(curWord.length === 1) {
          res.push(curWord);
      }
      
      for(let j = 1; j < curWord.length; j++) {
          if(row1.indexOf(curWord.charAt(j)) !== -1 && curRow !== 1) {
              break;
          }
          else if(row2.indexOf(curWord.charAt(j)) !== -1 && curRow !== 2) {
              break;
          }
          else if(row3.indexOf(curWord.charAt(j)) !== -1 && curRow !== 3) {
              break;
          }
          
          if(j === curWord.length-1) {
              res.push(curWord);
          }
      }
      
  }
  return res;
};