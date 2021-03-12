import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
// import Board from 'sudoku.js';

$(document).ready(function() {
  $('#board-form').submit(function(event) {
    event.preventDefault();
    // const val = parseInt($('#val').val());
    // const row = parseInt($('#row').val());
    // const column = parseInt($('column').val());
    // const response = sudoku.checkType();
    // $('#response').append("<p>" + response + "</p>");
  });
});