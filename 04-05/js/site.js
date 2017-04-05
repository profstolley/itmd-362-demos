// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  // A little usability feature; let people show the password if privacy isn't
  // a big deal (for example, the user is alone)
  $('#password-input').append('<a id="show-password" href="#null">Show Password</a>');
  $('#show-password').on('click', function(e) {
    $('#password').attr('type','text');
    e.preventDefault();
  });

  // Mock up unsuccessful and successful login attempts; this demo requires
  // a username of 'tbernerslee' and will accept any password
  $('#login').on('submit', function(e) {
    if ($('#username').val() === 'tbernerslee') {
      // success; send the user to the account.html page
      window.location.replace('account.html');
    } else {
      console.log('Bad username');
      $('#login').prepend('<div class="error">Incorrect Username or Password</div>');
    }
    e.preventDefault();
  });
});
