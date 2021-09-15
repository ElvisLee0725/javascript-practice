var getFood = function(grid) {
  let row = grid.length;
  let col = grid[0].length;
  
  for(let i = 0; i < row; i++) {
      for(let j = 0; j < col; j++) {
          if(grid[i][j] === '*') {
              let queue = [];
              queue.push([i, j]);
              let steps = 0;
              while(queue.length > 0) {
                  let size = queue.length;
                  for(let k = 0; k < size; k++) {
                      const cur = queue.shift();
                      let x = cur[0];
                      let y = cur[1];

                      if(grid[x][y] === '#') {
                          return steps;
                      }
                      
                      if(x - 1 >= 0 && (grid[x-1][y] === 'O' || grid[x-1][y] === '#')) {
                          if(grid[x-1][y] === 'O') {
                              grid[x-1][y] = 'V';
                          }
                          queue.push([x-1, y]);
                      }
                      
                      if(x + 1 < row && (grid[x+1][y] === 'O' || grid[x+1][y] === '#')) {
                          if(grid[x+1][y] === 'O') {
                              grid[x+1][y] = 'V';
                          }
                          queue.push([x+1, y]);
                      }
                      
                      if(y - 1 >= 0 && (grid[x][y-1] === 'O' || grid[x][y-1] === '#')) {
                          if(grid[x][y-1] === 'O') {
                              grid[x][y-1] = 'V';
                          }
                          queue.push([x, y-1]);
                      }
                      
                      if(y + 1 < col && (grid[x][y+1] === 'O' || grid[x][y+1] === '#')) {
                          if(grid[x][y+1] === 'O') {
                              grid[x][y+1] = 'V';
                          }
                          queue.push([x, y+1]);
                      }
                  }
                  steps++;
              }
          }
      }
  }
  return -1;
};