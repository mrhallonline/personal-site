/*****For Sticky Navigation */

$(document).ready(function () {

    // $('.intro').waypoint(function (direction) {
    //   if (direction == "down") {
    //     $('nav').addClass('sticky');
    //   } else {
    //     $('nav').removeClass('sticky');
    //   }
    // }, {
    //   offset: '60px;'
    // });
    var sticky = new Waypoint.Sticky({
        element: $('.intro')[0]
      }, {
          offset: '50px'
      }
      
      )

     
});