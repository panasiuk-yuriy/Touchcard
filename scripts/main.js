$(document).ready(function() {
  $('.panel__option').click(function() {
    $(this).toggleClass('in').next().slideToggle();
    $('.panel__option').not(this).removeClass('in').next().slideUp();
  });
});

jQuery('img.svg').each(function() {
  const $img = jQuery(this);
  const imgID = $img.attr('id');
  const imgClass = $img.attr('class');
  const imgURL = $img.attr('src');

  jQuery.get(imgURL, function(data) {
    // Get the SVG tag, ignore the rest
    let $svg = jQuery(data).find('svg');

    // Add replaced image ID to the new SVG
    if (typeof imgID !== 'undefined') {
      $svg = $svg.attr('id', imgID);
    }

    // Add replaced image classes to the new SVG
    if (typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass + ' replaced-svg');
    }

    // Remove any invalid XML tags as per http://validator.w3.org
    $svg = $svg.removeAttr('xmlns:a');

    // Replace image with new SVG
    $img.replaceWith($svg);
  }, 'xml');
});

$(document).ready(function() {
  $("input[name='Phone']").inputmask({
    placeholder: '',
    mask: '+38 0## ### ## ##',
    greedy: true,
    definitions: { '#': {
      validator: '[0-9]', cardinality: 1,
    } },
  });
});
