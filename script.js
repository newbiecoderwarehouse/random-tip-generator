//Main coding tips
var arrayTips = [
{"tip":"Design every page as a landing page."},
{"tip":"Make appealing form buttons"},
{"tip":"Learn how to use google"},
 {"tip":"Dry = Don't Repeat Yourself"},
  {"tip":"When starting a new project, design it in shades of gray and add color later"},
 {"tip":"Never stop learning"},
 {"tip":"Create a mockup via Wireframe"},
 {"tip":"Communicate with your partners"},
 {"tip":"Don't be afraid to google your questions"},
 {"tip":"Find a routine"},
 {"tip":"Find your zen. Become one with your code. And then watch your productivity rage"},
 {"tip":"Watch youtube videos religiously"},
 {"tip":"Comment on your code, so readers can understand"},
 {"tip":"Learn Git and Github"},
 {"tip":"Turn things off that will distract you!"},
 {"tip":"Work with others"},
 {"tip":"Create small projects daily"},
 {"tip":"Set yourself apart from others "},
 {"tip":"Have fun coding!"},
 {"tip":"Be Prepared to Give Up Sleep"},
{"tip":"Be active in online web developer forums"},
 {"tip":"Never give up"},
  {"tip":"Take a break when needed"},
  {"tip":"Know your endgoal and believe in yourself"},
//Each tip cannot exceed 102 characters. Example length limit below.
//       :"Find your zen. Become one with your code. And then watch your productivity rage. Don't worry about it."
//The reason the tip needs to be 108 characters: "#randomcodetips http://j.mp/gencx" is included in the tweet.




];

//Random number from the length of the array AND display of coding tip
function randomTip() {
var result = Math.floor((Math.random()*arrayTips.length) );
var tweetText = document.getElementById("random-tip").innerHTML = arrayTips[result].tip;

var rTipHighlight = document.querySelector("#random-tip");
rTipHighlight.style.display = "inline";
//Adding Twitter
document.getElementById("tweet-div").innerHTML='<a  href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fj.mp/gencx&text=' + tweetText.replace(/\s+/g, "%20") + "+%23randomcodetips" + '" class="btn btn-lg twitter-share-button" id="tweetTip" data-size="large">Tweet</a>';

}

