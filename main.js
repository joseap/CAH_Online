$(document).ready(function(){
	var questions = [
		"How did I lose my virginity?",
		"Why can't I sleep at night?",
		"What's the next happy meal toy?",
		"Alternative medicine is now embracing the curative powers of __________",
		"What ended my last relationship?",
		"What is Batman's guilty pleasure?",
		"What's a girl's best friend?",
		"I drink to forget __________",
		"I'm sorry, Professor, but I couldn't complete the homework because of __________ ",
		"Here's the church. Here's the steeple. Open the doors and there is __________",
		"It's a pity that kids these days are all getting involved with __________",
		"I got 99 problems but __________ ain't one",
		"Next from J.K. Rowling: Harry Potter and the Chamber of __________",
		"During sex, I like to think about __________",
		"What will always get you laid?",
		"What don't you want to find in your Kung Pao Chicken?",
		"The class field trip was completely ruined by __________",
		"What did I bring back from Mexico?",
		"What get's better with age?",
		"What's George W. Bush thinking about right now?",
		"What helps Obama unwind?"
	];

	var answers = [
		"Sean Connery",
		"Genghis Khan",
		"The Milk Man",
		"The heart of a child",
		"Friendly fire",
		"Passive-aggressive Post-it notes",
		"A subscription to Men's Fitness",
		"Crumbs all over the god damn carpet",
		"Tom cruise",
		"Bees?",
		"Drinking alone",
		"A micropig wearing a tiny raincoat and booties",
		"Her Majesty Queen Elizabeth II",
		"Viagra ©",
		"Morgan Freeman's voice",
		"A middle-aged man on roller skates",
		"Not wearing pants",
		"Flesh-eating bacteria",
		"Expecting a burp and vomiting on the floor",
		"Autocannibalism",
		"Laying an egg",
		"Shaquille O'Neal's acting career",
		"Riding off into sunset",
		"Boobies",
		"Miley Cyrus at 55",
		"Axe's body spray",
		"Stephen Hawking talking dirty"
	];

	var randomQuestion = Math.floor(Math.random()*questions.length);
	var randomAnswer = Math.floor(Math.random()*answers.length);

	$('h1','#random-question').html(questions[randomQuestion]);
	$('h1','#random-answer').html(answers[randomAnswer]);

	$('h1').click(function (){
		$('h1').text(answers[randomAnswer]);
		$('h1').css('color','black');
		$('body').addClass('white-background');
 	});

 	$('.white-background').click(function (){
 			window.location.replace('index.html');
 	});
});


	
	

