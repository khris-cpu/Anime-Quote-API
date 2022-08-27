const quoteDom = document.getElementById('quote');
const characterDom = document.getElementById('character');

let isLoading = false;

const randomQuote = () => {
	if (isLoading){
		return
	}
	
	isLoading = true;
	quoteDom.innerHTML = "Loading"
	
	fetch('https://animechan.vercel.app/api/random')
	.then(response => response.json())
	.then((data) => {
		quoteDom.innerHTML = data.quote
		characterDom.innerHTML = data.character
	}).finally(() => {
		isLoading = false;
	})
}

randomQuote()