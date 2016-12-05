
var colorTotals = {
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0,
  total: 0,
  calcTotal: function() {this.total = this.red + this.yellow + this.green + this.blue;return this.total;}
}

$(document).ready(function(){
  console.log("meow bark squeek");

  init();
});

function init(){
  $('.color-button').on('click', clickedcolor)
  $(document).on('click', '.color-cube', clickedRemove)
} // end init()


function clickedcolor() {
  var color = $(this).attr('data-color');
  addCube(color);
  updateTotals(color);
} // end clickedcolor

function clickedRemove()  {
  $(this).removeClass("color-cube");
  var color = $(this).attr('class');
  colorTotals[color]--;
  updateTotals(color);
}// end clickedRemove

function addCube(color) {
  var htmlString = '<div class="'+ color +' color-cube"></div>';
  $('.container').append(htmlString);
  colorTotals[color]++;
}// end addCube

function updateTotals(color) {
  var htmlString = "Total "+color+": "+colorTotals[color];
  $("#"+color).html(htmlString);
  htmlString = "Total Cubes: "+ colorTotals.calcTotal();
  $("#total").html(htmlString);
} // add updateTotals
