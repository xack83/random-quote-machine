/* JQUERY */

$(document).ready(function() {
	//Initial presentation of content
	//Hiding divs
	$("#quote-cont").hide();
	$("img").hide();
	//Getting first quote
	getQuote();
	//Showing different divs sequentially
	$("#quote-cont").delay(500).fadeIn(2000);
	$("#quote").delay(500).fadeIn(2000);
	$("#author").delay(500).fadeIn(2000);
	$("img").delay(1000).fadeIn(2000);
	//Animation when showing new quotes after clicking "New Quote button"
	$("#new-quote").click(function() {
		$("#quote").hide(); 
		$("#author").hide()
		getQuote();
		$("#quote").fadeIn(1000);
		$("#author").fadeIn(1000);
	});
	//Envet handler. Click on "Tweet" button
	$("#tweet-quote").click(function() {
		//Get current quote and author. Use encodeURI method to escape semicolon in quotes (if not the quote is cut when there is a semicolon)
		var currentQuote = encodeURIComponent($("#quote").text());
		var currentAuthor = encodeURIComponent($("#author").text());
		//Include current quote in tweet button href
		$(this).attr('href', 'https://twitter.com/intent/tweet?text='+currentQuote+' '+currentAuthor+'.');
	})
	
});

var quotes = [
	['It is a ridiculous thing for a man not to fly from his own badness, which is indeed possible, but to fly from other men\'s badness, which is impossible.','Marcus Aurelius'],
	['The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today. You are arranging what is in Fortune\'s control and abandoning what lies in yours.','Seneca'],
	['It is a great man that can treat his earthenware as if it was silver, and a man who treats his silver as if it was earthenware is no less great.','Seneca'],
	['To be everywhere is to be nowhere.','Seneca'],
	['It is not the man who has too little that is poor, but the one who hankers after more.','Seneca'],
	['Sometimes in life we must fight not only without fear, but also without hope.','Alessandro Pertini'],
	['What fortune has made yours is not your own.','Seneca'],
	['Philosophy calls for simple living, not for doing penance, and the simple way of life need not be a crude one.','Seneca'],
	['You should … live in such a way that there is nothing which you could not as easily tell your enemy as keep to yourself.','Seneca'],
	['Nothing is burdensome if taken lightly, and nothing need arouse one\'s irritation so long as one doesn\'t make it bigger than it is by getting irritated.','Seneca'],
	['Regard [a friend] as loyal, and you will make him loyal.','Seneca'],
	['Until we have begun to go without them, we fail to realize how unnecessary many things are. We\'ve been using them not because we needed them but because we had them.','Seneca'],
	['When force of circumstance upsets your equanimity, lose no time in recovering your self-control, and do not remain out of tune longer than you can help. Habitual recurrence to the harmony will increase your mastery of it.','Marcus Aurelius'],
	['Even the least of our activities ought to have some end in view.','Marcus Aurelius'],
	['You need to avoid certain things in your train of thought: everything random, everything irrelevant. And certainly everything self-important or malicious. You need to get used to winnowing your thoughts, so that if someone says, "What are your thinking about?" you can respond at once (and truthfully) that you are thinking this or thinking that.','Marcus Aurelius'],
	['My advice is really this: what we hear the philosophers saying and what we find in their writings should be applied in our pursuit of the happy life. We should hunt out the helpful pieces of teaching, and the spirited and noble-minded sayings which are capable of immediate practical application—not far-fetched or archaic expressions or extravagant metaphors and figures of speech—and learn them so well that words become works. No one to my mind lets humanity down quite so much as those who study philosophy as if it were a sort of commercial skill and then proceed to live in a quite different manner from the way they tell other people to live.','Seneca'],
	['Why be concerned about others, come to that, when you\'ve outdone your own self? Set yourself a limit which you couldn\'t even exceed if you wanted to, and say good-bye at last to those deceptive prizes more precious to those who hope for them than to those who have won them. If there were anything substantial in them they would sooner or later bring a sense of fullness; as it is they simply aggravate the thirst of those who swallow them.','Seneca'],
	['If you want to make progress, put up with being perceived as ignorant or naive in worldly matters, don\'t aspire to a reputation for sagacity. If you do impress others as somebody, don\'t altogether believe it. You have to realize, it isn\'t easy to keep your will in agreement with nature, as well as externals. Caring about the one inevitably means you are going to shortchange the other.','Epictetus'],
	['Hour by hour resolve firmly to do what comes to hand with dignity, and with humanity, independence, and justice. Allow your mind freedom from all other considerations. This you can do, if you will approach each action as though it were your last, dismissing the desire to create an impression, the admiration of self, the discontent with your lot. See how little man needs to master, for his days to flow on in quietness and piety: he has but to observe these few counsels, and the gods will ask nothing more.','Marcus Aurelius'],
	['Love sometimes injures. Friendship always benefits, After friendship is formed you must trust, but before that you must judge.','Seneca'],
	['Warriors should suffer their pain silently.','Erin Hunter'],
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

