// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {

  // Our test users
  var users = ['SallySuccess','FreddyFailure','PollyProblem'];

  // Function to establish a current user based on URL hash
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

  // Generic toggler function, used in jQuery methods below
  function toggleValue(oldValue,newValue,currentValue) {
    var value = oldValue;
    if (currentValue === oldValue) {
      value = newValue;
    }
    return value;
  }

  // jQuery method to toggle a label (HTML text)
  $.fn.toggleLabel = function(oldLabel,newLabel) {
    var currentLabel = this.html();
    this.html(toggleValue(oldLabel,newLabel,currentLabel));
    return this;
  };

  // jQuery method to toggle a particular attribute's value
  $.fn.toggleAttr = function(attr,oldValue,newValue) {
    var currentValue = this.attr(attr);
    this.attr(attr, toggleValue(oldValue,newValue,currentValue));
    return this;
  };

  //========= jQuery to Manipulate the Page =========

  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#account-details').append(
    ' <b id="logged-in-user">for '+users[currentUser()]+'</b>');


  // A little usability feature; let people show the password if privacy isn't
  // a big deal (for example, the user is alone)
  $('#password-input').append('<a href="#null" id="password-toggle">Show Password</a>');
  $('#password-toggle').on('click', function(e){
    $('#password').toggleAttr('type','password','text');
    $('#password-toggle').toggleLabel('Show Password','Hide Password');
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
