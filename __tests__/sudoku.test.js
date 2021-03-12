import { TestScheduler } from 'jest-cli';
import Board from '../src/sudoku.js';

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test('should set cell to number if number is valid', () => {
    board.setCell(6, 0, 3);

    expect(board.board[0][3]).toEqual(6);
  });

  test('should not set cell to number if number is invalid', () => {
    board.setCell(5, 0, 3);

    expect(board.board[0][3]).toEqual(0);
  });
});
