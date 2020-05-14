'use strict';

$(function () {
    $('.devour').on('click', function (event) {
        const id = $(this).data('id');
        const idObj = {
            id: id
        };

        $.ajax('/api/burger/devour', {
            type: 'PUT',
            data: idObj
        }).then(function () {
            console.log('Devoured a burger!');
            location.reload();
        });
    });

    $('.toonchee').on('submit', function (event) {
        // event.preventDefault();

        const newBurger = {
            burgerName: $('#burger-input')
                .val()
                .trim()
        };

        $.ajax('/api/burger', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('Added a new burger!');
            $('.available').reload();

        });
    });
});