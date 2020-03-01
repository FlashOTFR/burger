'use strict';

$(function() {
    $('.change-devoured').on('click', function(event) {
      const id = $(this).data('id');
      const newDevour = $(this).data('newdevour');
  
      const newDevourState = {
        devoured: newDevour
      };
  
      $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: newDevourState
      }).then(function() {
        console.log('changed devoured to', newDevour);
        location.reload();
      });
    });
  
    $('.create-form').on('submit', function(event) {
      event.preventDefault();
  
      const newBurger = {
        name: $('#nb')
          .val()
          .trim(),
        devoured: $('[name=devoured]:checked')
          .val()
          .trim()
      };
  

      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      }).then(function() {
        console.log('created new burger');
        location.reload();
      });
    });