$(function() {
    var tz = moment.tz.guess() // Intl.DateTimeFormat().resolvedOptions().timeZone

		$('time').each(function() {
				var dt = new Date($(this).attr('datetime'));
                var m = dt.getMinutes();
                var local = moment(dt).tz(tz).format('h:mma z')
                var absolute = moment(dt).tz('Europe/Berlin').format('h:mma z')
                // $(this).html(dt.getHours() + ':' + m.toString().padStart(2, '0') + ' ('+tz+' time)');
                $(this).html(local + (local == absolute ? '' : ' (' + absolute + ')'));
		})
});
