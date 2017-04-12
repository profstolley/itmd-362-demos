// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {

  // Our test users
  var users = ['SallySuccess','FreddyFailure','PollyProblem'];

  function toggleValue(oldValue,newValue,currentValue) {
    var value = oldValue;
    if (currentValue === oldValue) {
      value = newValue;
    }
    return value;
  }

  function currentUser() {
    if (window.location.hash.length > 0) {
      var hash = window.location.hash;
      var user = window.location.hash.split('#')[1];
      return user;
    }
    else {
      return 3;
    }
  }

  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#account-details').append(
    ' <b id="logged-in-user">for '+users[currentUser()]+'</b>');


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
    if ($('#username').val() === users[0]) {
      // success; send the user to the account.html page
      window.location.replace('account.html#0');
    } else {
      console.log('Bad username');
      $('#login').prepend('<div class="error">Incorrect Username or Password</div>');
    }
    e.preventDefault();
  });
});
