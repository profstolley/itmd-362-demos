// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {

  function toggleLabel(oldLabel,newLabel,currentLabel) {
    if (oldLabel === currentLabel) {
      return newLabel;
    }
    else {
      return oldLabel;
    }
  }

  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  // A little usability feature; let people show the password if privacy isn't
  // a big deal (for example, the user is alone)
  $('#password-input').append('<a href="#null" id="password-toggle">Show Password</a>');
  $('#password-toggle').on('click', function(e){
    $('#password').attr('type',toggleLabel('password','text',$('#password').attr('type')));
    $('#password-toggle').html(toggleLabel('Show Password','Hide Password', $('#password-toggle').html()));
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
