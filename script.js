  
var male = 1;
var female = 2;
var index = 0;
var numQuotes = 0;


var myColors = [
            "aqua",
            "aquamarine",
            "black",
            "blanchedalmond",
            "blue",
            "blueviolet",
            "brown",
            "burlywood",
            "cadetblue",
            "chartreuse",
            "chocolate",
            "coral",
            "cornflowerblue",
            "crimson",
            "cyan",
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "darkkhaki",
            "darkmagenta",
            "darkolivegreen",
            "darkorange",
            "darkorchid",
            "darkred",
            "darksalmon",
            "darkseagreen",
            "darkslateblue",
            "darkslategray",
            "darkturquoise",
            "darkviolet",
            "deeppink",
            "deepskyblue",
            "dimgray",
            "dodgerblue",
            "firebrick",
            "forestgreen",
            "fuchsia",
            "gainsboro",
            "gold",
            "goldenrod",
            "gray",
            "green",
            "greenyellow",
            "hotpink",
            "indianred",
            "indigo",
            "khaki",
            "lawngreen",
            "lightblue",
            "lightcoral",
            "lightgray",
            "lightgreen",
            "lightpink",
            "lightsalmon",
            "lightseagreen",
            "lightskyblue",
            "lightslategray",
            "lightsteelblue",
            "lime",
            "limegreen",
            "magenta",
            "maroon",
            "mediumaquamarine",
            "mediumblue",
            "mediumorchid",
            "mediumpurple",
            "mediumseagreen",
            "mediumslateblue",
            "mediumspringgreen",
            "mediumturquoise",
            "mediumvioletred",
            "midnightblue",
            "mistyrose",
            "moccasin",
            "navajowhite",
            "navy",
            "olive",
            "olivedrab",
            "orange",
            "orangered",
            "orchid",
            "palegoldenrod",
            "palegreen",
            "paleturquoise",
            "palevioletred",
            "papayawhip",
            "peachpuff",
            "peru",
            "pink",
            "plum",
            "powderblue",
            "purple",
            "rebeccapurple",
            "red",
            "rosybrown",
            "royalblue",
            "saddlebrown",
            "salmon",
            "sandybrown",
            "seagreen",
            "sienna",
            "silver",
            "skyblue",
            "slateblue",
            "slategray",
            "springgreen",
            "steelblue",
            "tan",
            "teal",
            "thistle",
            "tomato",
            "turquoise",
            "violet",
            "wheat",
            "yellow",
            "yellowgreen"];

var myList = [
  { q:"A woman is like a tea bag- you never know how strong she is until she gets in hot water.", p:"Mary Nolan",s:female}, 


{ q:"Beautiful young people are accidents of nature, but beautiful old people are works of art.", p:"Mary Nolan",s:female}, 

{ q:"Do what you feel in your heart to be right - for you'll be criticized anyway. You'll be damned if you do, and damned if you don't.", p:"Mary Nolan",s:female},

{ q:"Friendship with oneself is all-important, because without it one cannot be friends with anyone else in the world.", p:"Mary Nolan",s:female},

{ q:"Great minds discuss ideas; Average minds discuss events; Small minds discuss people.", p:"Mary Nolan",s:female}, 

{ q:"I could not at any age be content to take my place in a corner by the fireside and simply look on. ", p:"Mary Nolan",s:female},

{ q:"I think that somehow, we learn who we really are and then live with that decision.", p:"Eleanor Roosevelt",s:female},

{ q:"If someone betrays you once, it’s their fault; if they betray you twice, it’s your fault.", p:"Eleanor Roosevelt",s:female}, 

{ q:"It is not fair to ask of others what you are unwilling to do yourself.", p:"Eleanor Roosevelt",s:female},

{ q:"Justice cannot be for one side alone, but must be for both.", p:"Eleanor Roosevelt",s:female},

{ q:"Learn from the mistakes of others. You can’t live long enough to make them all yourself.", p:"Eleanor Roosevelt",s:female}, 

{ q:"Life was meant to be lived, and curiosity must be kept alive. One must never, for whatever reason, turn his back on life.", p:"Eleanor Roosevelt",s:female}, 

{ q:"One thing life has taught me: if you are interested, you never have to look for new interests. They come to you. When you are genuinely interested in one thing, it will always lead to something else.", p:"Eleanor Roosevelt",s:female}, 

{ q:"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.", p:"Eleanor Roosevelt",s:female}, 

{ q:"You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I have lived through this horror. ",p:"Eleanor Roosevelt",s:female}, 

{ q:"No one can make you feel inferior without your consent.", p:"Eleanor Roosevelt",s:female}, 

{ q:"People grow through experience if they meet life honestly and courageously. This is how character is built.", p:"Eleanor Roosevelt",s:female}, 
  
{q:"Before God we are all equally wise - and equally foolish.",
 p:"Albert Einstein",s:male}, 

{q:"Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.",p:"Patricia Roberts",s:female},

{q:"Ethical axioms are found and tested not very differently from the axioms of science. Truth is what stands the test of experience.",p:"Patricia Roberts",s:female},

{q:"Every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.",p:"Patricia Roberts",s:female},

{q:"Few people are capable of expressing with equanimity opinions which differ from the prejudices of their social environment. Most people are even incapable of forming such opinions.",p:"Albert Einstein",s:male},

{q:"Gravitation cannot be held responsible for people falling in love. How on earth can you explain in terms of chemistry and physics so important a biological phenomenon as first love? Put your hand on a stove for a minute and it seems like an hour. Sit with that special girl for an hour and it seems like a minute. That's relativity.",p:"Patricia Roberts",s:female},
 
{q:"I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",p:"Albert Einstein",s:male},

{q:"I never teach my pupils. I only attempt to provide the conditions in which they can learn.",p:"Sarah Owens",s:female},

{q:"I never think of the future - it comes soon enough.",p:"Sarah Owens",s:female},

{q:"If I had only known, I would have been a locksmith.",p:"Sarah Owens",s:female},

{q:"If you are out to describe the truth, leave elegance to the tailor.",p:"Sarah Owens",s:female},

{q:"Imagination is more important than knowledge...",p:"Albert Einstein",s:male},

{q:"It is a miracle that curiosity survives formal education.",p:"Albert Einstein",s:male},

{q:"Before God we are all equally wise - and equally foolish.",p:"Albert Einstein",s:male},

{q:"Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.",p:"Albert Einstein",s:male},

{q:"Ethical axioms are found and tested not very differently from the axioms of science. Truth is what stands the test of experience.",p:"Albert Einstein",s:male},

{q:"Every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.",p:"Albert Einstein",s:male},

{q:"Few people are capable of expressing with equanimity opinions which differ from the prejudices of their social environment. Most people are even incapable of forming such opinions.",p:"Albert Einstein",s:male},
  
{q:"Gravitation cannot be held responsible for people falling in love. How on earth can you explain in terms of chemistry and physics so important a biological phenomenon as first love? ",
 p:"Albert Einstein",s:male},
 
{q:"I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",p:"Albert Einstein",s:male},
 
{q:"I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
 p:"Albert Einstein",s:male},
  
{q:"I never think of the future - it comes soon enough.",p:"Patricia Roberts",s:female},
  
{q:"If I had only known, I would have been a locksmith.",
 p:"Albert Einstein",s:male},
  
{q:"If you are out to describe the truth, leave elegance to the tailor.",
 p:"Albert Einstein",s:male},
  
{q:"Imagination is more important than knowledge...",
p:"Albert Einstein",s:male},
  
{q:"It is a miracle that curiosity survives formal education.",p:"Patricia Roberts",s:female},
  
{q:"A wretched soul, bruised with adversity, We bid be quiet when we hear it cry;  But were we burdened with like weight of pain, As much or more we should ourselves complain.",
 p:"William Shakespeare",s:male},

{q:"Action is eloquence.",  
p:"Henry Boardman",s:male},

{q:"And since you know you cannot see yourself, so well as by reflection, I, your glass, will modestly discover to yourself, that of yourself which you yet know not of.", 
p:"Henry Boardman",s:male},

{q:"And thus I clothe my naked villainy with old odd ends, stol'n forth of holy writ; And seem a saint, when most I play the devil.", 
p:"Henry Boardman",s:male},

{q:"Assume a virtue, if you have it not.", 
p:"Henry Boardman",s:male},

{q:"Be great in act, as you have been in thought.",  
p:"Henry Boardman",s:male}, 

{q:"Blow, blow, thou winter wind, Thou art not so unkind, As man's ingratitude.", 
p:"William Shakespeare", s:male}, 

{q:"Conversation should be pleasant without scurrility, witty without affectation, free without indecency, learned without conceitedness, novel without falsehood.", 
p:"William Shakespeare",s:male}, 

{q:"For they are yet ear-kissing arguments.", 
p:"William Shakespeare",s:male}, 

{q:"Free from gross passion or of mirth or anger constant in spirit, not swerving with the blood, garnish'd and deck'd in modest compliment,  not working with the eye without the ear. ", p:"William Shakespeare",s:male}, 

{q:"Glory is like a circle in the water, Which never ceaseth to enlarge itself,  Till by broad spreading it disperses to naught.", 
p:"William Shakespeare",s:male}, 

{q:"God bless thee; and put meekness in thy mind, love, charity, obedience, and true duty!", 
p:"Henry Boardman",s:male},

{q:"His life was gentle; and the elements, So mixed in him, that Nature might stand up, And say to all the world, THIS WAS A MAN!", 
p:"William Shakespeare",s:male}, 

{q:"How poor are they who have not patience! What wound did ever heal but by degrees.", 
p:"William Shakespeare",s:male}, 

{q:"How use doth breed a habit in a man.", 
p:"William Shakespeare",s:male}, 

{q:"I am not bound to please thee with my answers.", 
p:"William Shakespeare",s:male}, 

{q:"I did never know so full a voice issue from so empty a heart: but the saying is true 'The empty vessel makes the greatest sound'. I dote on his very absence.", 
p:"William Shakespeare",s:male}, 

{q:"I feel within me a peace above all earthly dignities, a still and quiet conscience.", 
p:"William Shakespeare",s:male}
 ];


function aRandomColor()
{
  var numColors = myColors.length;
  var colorPick = Math.floor(Math.random()*numColors);
  return myColors[colorPick];
}

function setLinks(myTweetObj, myEmailObj, quoteText)
{
  var tweetStr = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+quoteText;
  var emailStr = 'mailto:someone@somedomain.com?subject=Quotes from Codepen&cc=yourself@yourdomain.com&bcc=nacarty@gmail.com&body='+quoteText;
  
  myTweetObj.href = tweetStr;
  myEmailObj.href = emailStr;
}



function getObject(i)
{
  var userStr = '';
  var col = aRandomColor();
  var docBody = document.getElementById("myBody");
  var myQuote = document.getElementById("myQuote");
  var myPerson = document.getElementById("myPerson");
  var myTwitter = document.getElementById("twitter");
  var myEmail = document.getElementById("email");
  var myBtn = document.getElementById("quoteBtn");
  
  var myRec = myList[i];
  var Quote = myRec.q;
  var Person = myRec.p;
  var Sex = myRec.s;
  
  myQuote.innerHTML = '<span class="glyphicon glyphicon-education"></span> ' + Quote + '</q><br><br>';
  
  if (Sex == male)
    {
     userStr = '<i class="fa fa-male">&nbsp</i>';
    }
  else{
     userStr = '<i class="fa fa-female">&nbsp</i>';
      }
  
  
  myPerson.innerHTML = userStr + myRec.p;
  
  docBody.style.backgroundColor = col;
  myQuote.style.color = col;
  myPerson.style.color = col;
  myTwitter.style.backgroundColor = col;
  myEmail.style.backgroundColor = col;
  myBtn.style.backgroundColor = col;
  
  setLinks(myTwitter, myEmail, myRec.q +"...by " + myRec.p);
  
  console.log(col);
  
} 

function getQuote()
{
  numQuotes = myList.length;
  index = Math.floor(Math.random()*numQuotes);
   console.log("Number of quotes: "+numQuotes);
  getObject(index);
  
}

getQuote();