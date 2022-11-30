$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
    })
});

window.addEventListener("load", (event) => {
    let HamburgerMenu = () => {
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector("span.close").classList.toggle("active");
        document.querySelector("span.overlay").classList.toggle("active");
    }
    document.getElementById("menu-icon").addEventListener("click", () => {
        HamburgerMenu();
    })
    document.querySelector("span.close").addEventListener("click", () => {
        HamburgerMenu();
    })
    document.querySelector("span.overlay").addEventListener("click", () => {
        HamburgerMenu();
    })
});


var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');