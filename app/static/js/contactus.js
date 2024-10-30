var widgetId1;
window.onloadCallback = function() {
  widgetId1 = grecaptcha.render('recaptcha', {
    'sitekey' : $('#sitekey').val(),
    'callback': enableBtn,
    'expired-callback': disableBtn,
    'error-callback': disableBtn
  });

};
setInitial();

function enableBtn() {
  $("#btn-submit").attr("disabled", false);
}

function disableBtn() {
  $("#btn-submit").attr("disabled", true);
}


$(function() {
  //hang on event of form with id=myform
  $("#contactus-submit").submit(function(e) {

    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    //prevent Default functionality
    e.preventDefault();

    var errors = [];

    !e.target['name'].value ? errors.push('Name is required') : undefined;

    !e.target['email'].value ? errors.push('Email is required') : undefined;

    !e.target['message'].value ? errors.push('Message is required') : undefined;

    !e.target['g-recaptcha-response'].value ? errors.push('Please verify the recaptcha') : undefined;

    e.target['email'].value && !validateEmail(e.target['email'].value) ? errors.push('Invalid email') : undefined;

    if (errors && errors.length) {
      $('#errorMessages ul').remove();
      $('#errorMessages').css('display', 'none');
      showErrors(errors);
    } else {

      //get the action-url of the form
      var actionurl = e.currentTarget.action;

      $("#btn-submit").html('Sending...');
      $("#btn-submit").attr("disabled", true);

      $.ajax({
        url: actionurl,
        type: 'post',
        data: JSON.stringify({
          name: e.target['name'].value,
          email: e.target['email'].value,
          message: e.target['message'].value,
          recaptcha_response: e.target['g-recaptcha-response'].value
        }),
        success: function(data) {
          setToDefault();
          showSuccess();
        },
        error: function(err) {
          setToDefault();
          var errors = err.responseJSON ? err.responseJSON.error : undefined;
          showErrors(errors || ['Something went wrong. Please try again']);
        }
      });
    }

  });
});


function showErrors(errors) {
  $('#errorMessages').css('display', 'block');

  var content = '<ul id="messages">';
  $.each(errors,function (i,val){
  content = content + '<li>' + '<b>' +val + '</b>' +'</li>'
  });
  content = content + '</ul>';

  $("#errorMessages").append(content);
}

function showSuccess() {
  $('#errorMessages').remove();
  $('#success').css('display', 'block');
  $("#success").show().delay(5000).fadeOut();
}

function setToDefault() {
  grecaptcha.reset(widgetId1);
  setInitial();
}

function setInitial() {
  $('#contactus-submit').trigger("reset");
  $('#success').css('display', 'none');
  $('#errorMessages ul').remove();
  $('#errorMessages').css('display', 'none');
  $("#btn-submit").html('Send Inquiry');
  $("#btn-submit").attr("disabled", true);
}
