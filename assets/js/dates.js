$(function() {
$('time').each(function() { 
    if (Intl.DateTimeFormat().resolvedOptions().timeZone == 'Europe/Paris') {
	    $(this).siblings('span').hide()
    };
    var dt = new Date($(this).attr('datetime'));
    var m = dt.getMinutes();
    $(this).html(dt.getHours() + ':' + m.toString().padStart(2, '0'));
})
});
