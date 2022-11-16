export default {
	//fetch function will be listening to a request comming in to this worker.
	fetch(request) {

		const tableOfRandomness = {
			'1':'Im message number one',
			'2':'Im message number twooooo! wwho comes next?',
			'3':'Im message number threeeeee',
			'4':'Im message number four...Im the last!... or Am I?'
		}
		
		//handleRequest(request);

		//function handleRequest(request){
			if (request.url == "https://workers2.guilherme-cf.workers.dev/" & request.method == "GET") 
			{
				//Logging for testing purposes
				//console.log(request.method)
				//return new Response(tableOfRandomness[Math.random*4], 
				//{
				var index = Math.floor(Math.random() * (4 - 1 + 1) + 1);
				console.log(index)
				//QUESTION: sometimes it runs the code twice in the same request.. check logs
				return new Response(tableOfRandomness[index], 
				{
					headers: 
					{
						'content-type': 'text/plain',
					},
				});
			}
			else if (request.url == "https://workers2.guilherme-cf.workers.dev/" & request.method == "POST") 
			{
				//Logging for testing purposes
				//console.log(request.method)
				return new Response('This was a POST request, Hello worker!!!!', 
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
				return new Response('Error! bad Bot! You do not fool me! Be gone!', 
				{	
					headers: 
					{
						'content-type': 'text/plain',
					},
				});
			}
		//}

	},

	//QUESTIONS:
	//Everytime I create different coding files, do I need a new different worker?
	//Or by calling the main file, which in turn might call different modules with different coding files, we will be using just one worker?

	//The JavaScript addEventListener() method allows you to set up functions to be called when a specified event happens, such as when a user clicks a button.
	//addEventListener(event, function, useCapture)
	//event: a string that specifies the name of the event. https://www.w3schools.com/jsref/dom_obj_event.asp
	//function: specifies the function to run when the event is detected. This is the magic that can allow your web pages to change dynamically.
	//useCapture: an optional Boolean value (true or false) that specifies whether the event should be executed in the capturing or bubbling phase. 
	//In the case of nested HTML elements (such as an img within a div) with attached event handlers, this value determines which event gets executed first. 
	//By default, it's set to false which means that the innermost HTML event handler is executed first (bubbling phase).
	//addEventListener('fetch', event => { event.respondeWith( handleRequest(event.request)) })
	//I did not understand quite well the sintax of what we are doing in the "function" argument of the addEventListener function
	//Also could not put the service syntax to work

	//MARK SAID TO USE MODULE SYNTAX GOING FORWARD!

	//QUESTION: how can I use functions using Modular syntax??
	//I was trying to organize the code but Im getting a bunch of "expected promise" errors

	//QUESTION: Im not sure I know what export default is...

	//QUESTION: I created a new worker, should I have used the one from session 1? is there a limit of workers we can have?


};