//Main coding tips
var arrayTips = [
{"tip":"Design every page as a landing page."},
{"tip":"Make appealing form buttons"},
{"tip":"Learn to use google and remember that it's ok to ask for help"},
 {"tip":"Dry = Don't Repeat Yourself"},
  {"tip":"When starting a new project, design it in shades of gray and add color later"},
 {"tip":"Early planning will save you time and stress"},
 {"tip":"Stay open and curious to new things because they happen often"},
 {"tip":"You can't know everything but get a rough understanding. Dive deeper when the opportunity comes."},
 {"tip":"There is no shorcut for success. Put the time in and you will get better"},
 {"tip":"Learning to code is a skill and like any skill, it's learnable."},
 {"tip":"Your coding skills are valuable and profitable. Don't sell yourself short."},
 {"tip":"Watch videos of other professionals coding to pick up good tricks and habits"},
 {"tip":"Comment on your code, so other people involved can have a better understanding"},
 {"tip":"Learn Git and Github and push your projects on a regular basis to help document your progress."},
 {"tip":"There's nothing wrong with admitting that you don't know something. Honesty can go a long way."},
 {"tip":"When coding with others, stay in constant communication and set deadlines."},
 {"tip":"Create small projects that are well structured with a deadline that challenge your skills"},
 {"tip":"When coding for long hours, don't forget to get the blood flowing. Find excuses to get up."},
 {"tip":"KISS = Keep it short and simple"},
 {"tip":"Don't focus too hard on your failure. Look at them as opportunities to improve"},
{"tip":"Be active in social media, and email people back because you may miss a big opportunity."},
 {"tip":"When you're stuck on a problem for a long time. Take a break and come back refreshed"},
  {"tip":"Don't waste your time comparing yourself to other coders. Everyone is on their own path"},
  {"tip":"Make learning challenges for yourself with clearly defined goals and deadlines."},
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

