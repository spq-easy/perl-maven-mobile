var SPQ = {
    initialize: function() {
        $('#btn-email-input-test').click(function () {
            $('#email-input').html($('#field-email').val());
            $('#email-input').addClass('label-success').fadeOut(3000);
        });

        $('#field-email').keyup(function() {
            //console.log($('#field-email').val());
            $('#email-input').html($('#field-email').val());
        });


        // data storage
        var store = localStorage.getItem("data");
        //console.log(store);
        var data = JSON.parse(localStorage.getItem("data"));
        if (! jQuery.isEmptyObject(data)) {
            SPQ.live_store = data;
        }

        $('#btn-pairs-add').click(function () {
            var key = $('#field-key').val();
            $('#field-key').val('');

            var value = $('#field-value').val();
            $('#field-value').val('');

            //console.log(key, value);

            SPQ.live_store[key] = value;

            localStorage.setItem('data', JSON.stringify(SPQ.live_store));
        });

        $('#btn-pairs-list').click(function () {
            var list = "<ul>\n";
            for (key in SPQ.live_store) {
                //console.log(key, SPQ.live_store[key]);
                list += "  <li>" + key + " => " + SPQ.live_store[key] + "</li>\n";
            }
            list += "</ul>";

            $('#div-cool-image').hide();
            $('#div-pairs-list').html(list).show();
        });

        $('#btn-pairs-ajax').click(function () {
            var data = {
                a: $('#field-a').val(),
                b: $('#field-b').val()
            };
            console.log('get request', data);
            $.get('http://localhost:3000/sum',
                       data,
                       function (response) {
                            $('#span-sum').html(response);
                       }
                );
        });

    },

    live_store: { }
}

$(document).ready(function () {
    SPQ.initialize();
});
