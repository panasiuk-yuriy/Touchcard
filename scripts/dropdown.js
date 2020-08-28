
$(document).ready(function() {
  $('.bottom__list li').hover(function() {
    $('.dropdown-menu', this).slideDown(200);
  }, function() {
    $('.dropdown-menu', this).stop().slideUp(200);
  });
});
