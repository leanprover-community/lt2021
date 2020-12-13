$(function() {
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone

		$('time').each(function() { 
				var dt = new Date($(this).attr('datetime'));
				var m = dt.getMinutes();
				$(this).html(dt.getHours() + ':' + m.toString().padStart(2, '0') + ' ('+tz+' time)');
		})
});
