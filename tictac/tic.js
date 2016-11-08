$(document).ready(function() {

  var player = 1;


  $('.box').on('click', function(event) {


var boxSelected = $(this);

if(boxSelected.hasClass('fa fa-times') || boxSelected.hasClass('fa fa-circle')){
  alert('This box is full, Click an Empty one!');
  } else {

if (player ===1) {
  boxSelected.addClass('fa fa-times');

if(checkWinner('fa fa-times')) {
  alert('congrats Player' +player+'has won');
  } else {
   player = 2;
    }
  } else {
  boxSelected.addClass('fa fa-circle');

if(checkWinner('fa fa-circle')) {
    alert('congrats Player' +player+'has won');
   } else {
    player = 1;
}
    }
  }
  });

  function checkWinner(symbol) {
    if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)){

return true;
       } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)){

return true;

       } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){
return true;

  }else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)){
    return true;

       } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){
        return true;

         } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){
          return true;

         } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){
          return true;

        } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)){
         return true;
  } else  {
   return false;
}
}
});

