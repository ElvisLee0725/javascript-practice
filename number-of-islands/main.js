// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// DFS Solution
//  - Time: O(MN), Space: O(MN)
var numIslands = function(grid) {   
  const row = grid.length;
  const col = grid[0].length;
  let count = 0;
  for(let i = 0; i < row; i++) {
      for(let j = 0; j < col; j++) {
          if(grid[i][j] === '1') {
              dfs(i, j);
              count++;
          }
      }
  }
  
  function dfs(i, j){
      if(i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === '0') {
          return ;
      }
      
      grid[i][j] = '0';
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j - 1);
      dfs(i, j + 1);
  }
  
  return count;
};

// BFS Solution
// Time: O(MN), Space: O(Min(M, N))
var numIslands = function(grid) {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;
  for(let i = 0; i < row; i++) {
      for(let j = 0; j < col; j++) {
          if(grid[i][j] === '1') {
              count++;
              grid[i][j] = '0';
              let queue = [[i, j]];
              while(queue.length > 0) {
                  const cur = queue.shift();
                  let r = cur[0];
                  let c = cur[1];
                  
                  // Top
                  if(r - 1 >= 0 && grid[r-1][c] === '1') {
                      grid[r-1][c] = '0';
                      queue.push([r-1, c]);
                  }
                  
                  // Bottom
                  if(r + 1 < row && grid[r+1][c] === '1') {
                      grid[r+1][c] = '0';
                      queue.push([r+1, c]);
                  }
                  
                  // Left
                  if(c - 1 >= 0 && grid[r][c-1] === '1') {
                      grid[r][c-1] = '0';
                      queue.push([r, c-1]);
                  }
                  
                  // Right
                  if(c + 1 < col && grid[r][c+1] === '1') {
                      grid[r][c+1] = '0';
                      queue.push([r, c+1]);
                  }
              }
          }
      }
  }
  
  return count;
};