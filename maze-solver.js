// Maze solver attempt (unfinished)
let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', 'e'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ']
];

function outOfMaze(maze, starting) {
  let [row, column] = starting;
  if (maze[row] && maze[row][column] === 'e') {
    return '';
  } else if (maze[row] && (maze[row][column] === ' ')) {
    maze[row][column] = '.';
    if (column < maze[row].length) {
      if (maze[row] && maze[row][column + 1] !== '*' && maze[row][column + 1] !== undefined && maze[row][column + 1] !== '.') {
        starting[1]++
        return 'R' + outOfMaze(maze, starting);
      }
    }
    if (row < maze.length) {
      if (maze[row + 1] && maze[row + 1][column] !== '*' && maze[row + 1][column] !== undefined && maze[row + 1][column] !== '.') {
        starting[0]++;
        return 'D' + outOfMaze(maze, starting);
      }
    }
  }
  if (column + 1 >= maze[0].length || (maze[row] && maze[row][column + 1] === '.') || (maze[row] && maze[row][column + 1] === '*')) {
    if (starting[1] < 1) {
      starting[0]--
      return 'U' + outOfMaze(maze, starting);
    }
    starting[1]--;
    return 'L' + outOfMaze(maze, starting);
  }
};