export default {
	//fetch function will be listening to a request comming in to this worker.
	fetch(request) {
		if (request.url == "https://workers1.guilherme-cf.workers.dev/" & request.method == "GET") 
		{
			//Logging for testing purposes
			//console.log(request.method)
			return new Response('This was a GET request, Hello worker!!!!', 
			{
				headers: 
				{
					'content-type': 'text/plain',
				},
			});
		}
		else if (request.url == "https://workers1.guilherme-cf.workers.dev/" & request.method == "POST") 
		{
			//Logging for testing purposes
			//console.log(request.method)
			return new Response(JSON.stringify('This was a POST request, Hello worker!!!!'), 
			{
				headers: 
				{	
					//After testing
					//By just changing the content-type to application/json, we are changing the response type to JSON
					'content-type': 'application/json',
				},
			});
		}
		else
		{
			return new Response('Error! bad Bot! You do not fool me!', 
			{
				headers: 
				{
					'content-type': 'text/plain',
				},
			});
		}
	},

	//QUESTIONS:
	//Everytime I create different coding files, do I need a new different worker?
	//Or by calling the main file, which in turn might call different modules with different coding files, we will be using just one worker?
};
