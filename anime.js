fetch('https://github.com/rocktimsaikia/anime-chan/blob/main/images/animechan_logo.png?raw=true')
			.then(response => response.json())
			.then((data) => {
				document.getElementById('quote').innerHTML = data.quote
				document.getElementById('character').innerHTML = data.character
				console.log(data);
			}
		)