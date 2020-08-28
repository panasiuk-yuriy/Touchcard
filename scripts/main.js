$(document).ready(function() {
  $('.panel__option').click(function() {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel__option').not(this).removeClass('in').next().slideUp();
  });
});
