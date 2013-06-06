var SPQ = {
    initialize: function() {
        $('#btn-email-input-test').click(function () {
            console.log($(this));
            $('#email-input').html = $(this).html
        });
    }
}
