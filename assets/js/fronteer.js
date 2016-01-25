$(document).on('ready', function() {

    // Add the current year to the footer
    $('#footer-year').text(new Date().getFullYear());

    /**
     * Show the form submit success message
     */
    var formSubmitted = function() {
        $('.get-in-touch-contact-component').toggleClass('hide');
        $('#get-in-touch-contact-success').focus();
    };

    /**
     * Submit the contact form when valid
     */
    $('#get-in-touch-form').validator().on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var name = $.trim($('#get-in-touch-name').val());
            var email = $.trim($('#get-in-touch-email').val());
            var message = $.trim($('#get-in-touch-message').val());

            $.ajax({
                'url': 'http://formspree.io/info@fronteer.io',
                'method': 'POST',
                'data': {
                    'name': name,
                    'email': email,
                    'message': message,
                    '_subject': 'Fronteer.io contact form submission from ' + name
                },
                'dataType': 'json',
                'success': formSubmitted,
                'error': function(err) {
                    window.alert('An error has occurred. Please try again later.')
                }
            });
            return false;
        }
    });
});
