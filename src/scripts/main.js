import $ from 'jquery';

$(document).ready(() => {
    $('#preloader').remove();
    $('.block').each(function() {
        $(this).append('<img src="blocks/' + $(this).attr('id') + '.png" />');
    });
});