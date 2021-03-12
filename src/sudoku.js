export default class Board {
  constructor() {
    this.board = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 0, 6, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ]
  }

  setCell(val, rowInd, columnInd) {
    const inColumn = () => {
      this.board.forEach((row) => {
        if (row[columnInd] === val) {
          console.log('Number already exists in a column');

          return true;
        }
        else {
          return false;
        }
      });
    };

    if (this.board[rowInd].includes(val) || inColumn()) {
      console.log('Number already exists');      
    }
    else {
      this.board[rowInd][columnInd] = val;
    }
  }
};