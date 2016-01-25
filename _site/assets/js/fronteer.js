$(document).on('ready', function() {

    $('form input, form textarea').on('blur', function() {
        $('form').removeClass('valid');
        var isValid = checkContactFormValidation(false);
        if (isValid) {
            $('form').addClass('valid');
        }
    });

    $('form').on('submit', function() {
        var isValid = checkContactFormValidation(true);

        if (isValid) {
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
                success: function(data) {
                    alert('We have received your message and will be in touch shortly!');
                },
                error: function(err) {
                    alert('Oh no, we couldn\'t send your message, you can always try sending an email to info@fronteer.io');
                }
            });
        }

        return false;
    });

    function checkContactFormValidation(showErrorMessages) {
        // Clear validation
        $('.form-group').removeClass('has-error');

        var name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var message = $('textarea').val();

        var isValid = true;

        if (!name) {
            if (showErrorMessages) {
                $('input[name="name"]').parent().addClass('has-error');
            }
            isValid = false;
        }
        if (!email) {
            if (showErrorMessages) {
                $('input[name="email"]').parent().addClass('has-error');
            }
            isValid = false;
        }
        if (!message) {
            if (showErrorMessages) {
                $('textarea').parent().addClass('has-error');
            }
            isValid = false;
        }

        return isValid;
    }

});
