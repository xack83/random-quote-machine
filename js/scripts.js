/* JQUERY */

$(document).ready(function() {
	$("#quote-cont").hide();
	$("img").hide();
	getQuote();
	$("#quote-cont").delay(500).fadeIn(2000);
	$("#quote").delay(500).fadeIn(2000);
	$("#author").delay(500).fadeIn(2000);
	$("img").delay(1000).fadeIn(2000);
	$("#new-quote").click(function() {
		$("#quote").hide(); 
		$("#author").hide()
		getQuote();
		$("#quote").fadeIn(1000);
		$("#author").fadeIn(1000);
	});
	//Envet handler. Click on Tweet button
	$("#tweet-quote").click(function() {
		//Get current quote and author. Use encodeURI method to escape semicolon in quotes (if not the quote is cut when there is a semicolon)
		var currentQuote = encodeURIComponent($("#quote").text());
		var currentAuthor = encodeURIComponent($("#author").text());

		
		//Include current quote in tweet button href
		$(this).attr('href', 'https://twitter.com/intent/tweet?text='+currentQuote+' '+currentAuthor+'.');
	})
	
});

var quotes = [
	['If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.','Marcus Aurelius'],
	['Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.','Marcus Aurelius'],
	['Complaining does not work as a strategy. We all have finite time and energy. Any time we spend whining is unlikely to help us achieve our goals. And it won\'t make us happier.','Randy Pausch'],
	['It is the power of the mind to be unconquerable.','Seneca'],
	['A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.','Nassim Nicholas Taleb'],
	['You know yourself what you are worth in your own eyes\; and at what price you will sell yourself. For men sell themselves at various prices. This is why, when Florus was deliberating whether he should appear at Nero\'s shows, taking part in the performance himself, Agrippinus replied, \'Appear by all means.\' And when Florus inquired, \'But why do not you appear?\' he answered, \'Because I do not even consider the question.\' For the man who has once stooped to consider such questions, and to reckon up the value of external things, is not far from forgetting what manner of man he is.” ','Epictetus'],
	['Misfortune nobly born is good fortune.','Marcus Aurelius'],
	['Here is your great soul—the man who has given himself over to Fate\; on the other hand, that man is a weakling and a degenerate who struggles and maligns the order of the universe and would rather reform the gods than reform himself.','Seneca'],
	['Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.','Seneca'],
	['Remember, it is not enough to be hit or insulted to be harmed, you must believe that you are being harmed. If someone succeeds in provoking you, realize that your mind is complicit in the provocation. Which is why it is essential that we not respond impulsively to impressions; take a moment before reacting, and you will find it easier to maintain control.','Epictetus'],
	['Remember two things: i. that everything has always been the same, and keeps recurring, and it makes no difference whether you see the same things recur in a hundred years or two hundred, or in an infinite period; ii. that the longest-lived and those who will die soonest lose the same thing. The present is all that they can give up, since that is all you have, and what you do not have you cannot lose.','Marcus Aurelius'],
	['Think of your many years of procrastination; how the gods have repeatedly granted you further periods of grace, of which you have taken no advantage. It is time now to realise the nature of the universe to which you belong, and of that controlling Power whose offspring you are; and to understand that your time has a limit set to it. Use it, then, to advance your enlightenment; or it will be gone, and never in your power again.','Marcus Aurelius']
]

var copy = quotes.slice(0);
function getQuote() {
	if (copy.length < 1) {
		copy = quotes.slice(0);
	}
	var index = Math.floor(Math.random() * copy.length);
	var nextQuote = copy[index];
	copy.splice(index,1);
	var currentQuote = nextQuote[0];
	var currentAuthor = nextQuote[1];
	document.getElementById("quote").innerHTML = currentQuote;
	document.getElementById("author").innerHTML = currentAuthor;
}



/* TWITTER script */

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));

