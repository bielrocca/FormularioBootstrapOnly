$(document).ready(function() {
    $('input[required]').each(function() {
        var label = $('label[for="' + $(this).attr('id') + '"]');
        label.append('<span style="color: red">*</span>');
    });

    $('#telefone').mask('(00) 00000-0000')
})