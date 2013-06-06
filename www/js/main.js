var SPQ = {
    initialize: function() {
        $('#btn-email-input-test').click(function () {
            console.log($('#btn-email-input-test').val());
            console.log($('#email-input').html);
            $('#email-input').html($('#field-email').val());
        });
    }
}

$(document).ready(function () {
    SPQ.initialize();
});
