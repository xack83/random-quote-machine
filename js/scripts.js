var quotes = [
['quote1','author1'],['quote2','author2'],['quote3','author3'],['quote4','author4'],['quote5','author5']
]

function getQuote() {
	var min = 0;
	var max = 2;
	var x = Math.floor(Math.random() * (max - min + 1)) + min;
	alert(quotes[x]);
}