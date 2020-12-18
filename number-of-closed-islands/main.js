// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
// Return the number of closed islands.

// BFS Solution:
// Use an object to store the current position (x, y)
// Iterate the input matrix from left to right, top to bottom. If find a 0 and it's not visited yet, start from that
// since it's a potential island
// Implement a queue: start from the position found from previous step, checking 4 directions to find neighboring cell
// which has value of 0 and not visited yet. If find, put that position into queue.
// Check if the current position has reached edge? If so, this island cannot be counted since it's not a closed island
// Else, add 1 to the countIsland variable
// Return the countIsland after the iteration

var closedIsland = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const visited = [];
  for(let i = 0; i < row; i++) {
      const temp = Array(col).fill(false);
      visited.push(temp);
  }
  let countIsland = 0;
  for(let i = 0; i < row; i++) {
      for(let j = 0; j < col; j++) {
          if(grid[i][j] === 0 && !visited[i][j]) {
              let queue = [{ x: i, y: j}];
              visited[i][j] = true;
              let reachEdge = false;
              while(queue.length > 0) {
                  const cur = queue.shift();
                  if(cur.x === 0 || cur.x === row-1 || cur.y === 0 || cur.y === col-1) {
                      reachEdge = true;
                  }
                  
                  if(cur.x > 0 && grid[cur.x-1][cur.y] === 0 && !visited[cur.x-1][cur.y]) {
                      queue.push({ x: cur.x-1, y: cur.y });
                      visited[cur.x-1][cur.y] = true;
                  }
                  
                  if(cur.x < row-1 && grid[cur.x+1][cur.y] === 0 && !visited[cur.x+1][cur.y]) {
                      queue.push({ x: cur.x+1, y: cur.y });
                      visited[cur.x+1][cur.y] = true;
                  }
                  
                  if(cur.y > 0 && grid[cur.x][cur.y-1] === 0 && !visited[cur.x][cur.y-1]) {
                      queue.push({ x: cur.x, y: cur.y-1 });
                      visited[cur.x][cur.y-1] = true;
                  }
                  
                  if(cur.y < col-1 && grid[cur.x][cur.y+1] === 0 && !visited[cur.x][cur.y+1]) {
                      queue.push({ x: cur.x, y: cur.y+1 });
                      visited[cur.x][cur.y+1] = true;
                  }
              }
              
              if(!reachEdge) {
                  countIsland++;
              }
          }
      }
  }
  return countIsland;
};