(function ($) {
  var $window = $(window),
    $body = $('body'),
    $header = $('#header'),
    $banner = $('#banner');

  // Breakpoints.
  breakpoints({
    wide: ('1281px', '1680px'),
    normal: ('981px', '1280px'),
    narrow: ('737px', '980px'),
    narrower: ('737px', '840px'),
    mobile: ('481px', '736px'),
    mobilep: (null, '480px'),
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Dropdowns.
  $('#nav > ul').dropotron({
    alignment: 'right',
  });

  // NavPanel.

  // Button.
  $('<div id="navButton">' + '<a href="#navPanel" class="toggle"></a>' + '</div>').appendTo($body);

  // Panel.
  $('<div id="navPanel">' + '<nav>' + $('#nav').navList() + '</nav>' + '</div>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'left',
      target: $body,
      visibleClass: 'navPanel-visible',
    });

  // Header.
  if (!browser.mobile && $header.hasClass('alt') && $banner.length > 0) {
    $window.on('load', function () {
      $banner.scrollex({
        bottom: $header.outerHeight(),
        terminate: function () {
          $header.removeClass('alt');
        },
        enter: function () {
          $header.addClass('alt reveal');
        },
        leave: function () {
          $header.removeClass('alt');
        },
      });
    });
  }
})(jQuery);
//modal

var modal = document.getElementById('myModal');
var drop = document.getElementById('drop');
var droper = document.getElementById('dropper');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];
var span2 = document.getElementsByClassName('close')[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
drop.onclick = function () {
  droper.style.display = 'block';
};
span2.onclick = function () {
  modal.style.display = 'none';
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.icon solid fa-angle-down')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
