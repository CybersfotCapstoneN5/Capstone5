// Dark mode

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
1;

// Seach

$(".control").click(function () {
  $("body").addClass("search-active");
  $(".input-search").focus();
});

$(".icon-close").click(function () {
  $("body").removeClass("search-active");
});

// End seach

// Menu

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $("#site-header").addClass("nav-fixed");
  } else {
    $("#site-header").removeClass("nav-fixed");
  }
});

//Main navigation Active Class Add Remove
$(".navbar-toggler").on("click", function () {
  $("header").toggleClass("active");
});
$(document).on("ready", function () {
  if ($(window).width() > 991) {
    $("header").removeClass("active");
  }
  $(window).on("resize", function () {
    if ($(window).width() > 991) {
      $("header").removeClass("active");
    }
  });
});
// End Menu

// Disabale navbar body scroll

$(function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("noscroll");
  });
});

// Owl carousel
$(document).ready(function () {
  $("#owl-demo1").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  });
});

// Slider banner
var $bannerSlider = jQuery(".banner-slider");
var $bannerFirstSlide = $("div.banner-slide:first-child");

$bannerSlider.on("init", function (e, slick) {
  var $firstAnimatingElements = $bannerFirstSlide.find("[data-animation]");
  slideanimate($firstAnimatingElements);
});
$bannerSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
  var $animatingElements = $(
    'div.slick-slide[data-slick-index="' + nextSlide + '"]'
  ).find("[data-animation]");
  slideanimate($animatingElements);
});
$bannerSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: false,
  swipe: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        swipe: true,
      },
    },
  ],
});
function slideanimate(elements) {
  var animationEndEvents =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  elements.each(function () {
    var $this = $(this);
    var $animationDelay = $this.data("delay");
    var $animationType = "animated " + $this.data("animation");
    $this.css({
      "animation-delay": $animationDelay,
      "-webkit-animation-delay": $animationDelay,
    });
    $this.addClass($animationType).one(animationEndEvents, function () {
      $this.removeClass($animationType);
    });
  });
}

// data color
jQuery("[data-color]").each(function () {
  jQuery(this).css("color", jQuery(this).attr("data-color"));
});

// Khi scroll chuột xuống 20px thì button go top sẽ hiện lên
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
