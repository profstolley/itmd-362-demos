$.noConflict();

// jQuery 3-style scoped $ and
// silent ready event
jQuery(function($) {
  $('h1').html('DOM Loaded!');
});

// jQuery 2-style scoped $ with
// self-invoking function and
// ready event
//
// (function($) {
//   $(document).on('ready', function() {
//     $('h1').html('DOM Loaded!');
//   });
// })(jQuery);
