window.onload = function(){

	const high_color = ['#ffffb3','#ffffb3','#ffffb3','#ffffb3','#ffff4d','#ffff4d','#ffff4d','#ffff4d','yellow','yellow','yellow','yellow'];
	
	$('.news').on('submit', function() {
		let news_sent = $('#text').val().split('. ');
		let priority = new Array();
		let link = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/71679dd5-1685-46eb-b514-b23778fe42ec?subscription-key=930339f93c4a49918bf63055eb3f4498&verbose=true&timezoneOffset=0&q=';	
		setTimeout(() => {for(let i=0; i<news_sent.length;i++) {
			let url = link + news_sent[i];
			$.get(url, (data) => {
				priority[i] = data.topScoringIntent.intent;
				$('#breaking-news').append('<span style="background-color:'+high_color[priority[i]]+'"> '+news_sent[i]+'.</span>');
				console.log(data);
			});

		}
		},1000);
		// console.log(priority);
	});
}


