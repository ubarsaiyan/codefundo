window.onload = function(){

	$('.auto-save').savy('load');

	const high_color = ['#FFF9C4','#FFF9C4','#FFF9C4','#FFF9C4','#FFF176','#FFF176','#FFF176','#FFF176','#FBC02D','#FBC02D','#FBC02D'];
	
	$('#submit-btn').on('click', function() {
		let news_sent = $('#text').val().split('\. ');
		let priority = new Array();
		let link = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/71679dd5-1685-46eb-b514-b23778fe42ec?subscription-key=930339f93c4a49918bf63055eb3f4498&verbose=true&timezoneOffset=0&q=';	
		$('#breaking-news').html('');
		for(let i=0; i<news_sent.length;i++) {
			let url = link + news_sent[i];
			$.get(url, (data) => {
				priority[i] = data.topScoringIntent.intent;
				$('#breaking-news').append('<span style="background-color:'+high_color[priority[i]]+'"> '+news_sent[i]+'</span><br>');
				console.log(data);
			});
		}
		// console.log(priority);
	});
}


