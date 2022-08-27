const randomQuote = () => {
	fetch('https://animechan.vercel.app/api/random')
	.then(response => response.json())
	.then((data) => {
		document.getElementById('quote').innerHTML = data.quote
		document.getElementById('character').innerHTML = data.character
		console.log(data);
	})
}

randomQuote()