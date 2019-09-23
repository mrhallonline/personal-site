/*****For Sticky Navigation */

$(document).ready(function () {

    $('.js--intro').waypoint(function (direction) {
      if (direction == "down") {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    }, {
      offset: '60px;'
    });