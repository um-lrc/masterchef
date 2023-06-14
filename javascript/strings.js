var textDir = "ltr"; // LTR or RTL

var gameRules = `
			<h5>The first player is chosen to start the game as the Judge. Everyone else starts as a chef.
			The chefs get 4 ingredients each. They will need to develop a dish for the category randomly assigned by the system. <br><br>

			The Judge is looking for a chef to prepare a meal category for them. The Judge will talk about the criteria first. Then each chef will propose a dish made of the four ingredients, and how this dish fits into the Judge's criteria. <br> <br>
			Chefs reveal their ingredients and how they make the dish to the Judge, one at a time, and
			describe how this dish is the most suitable for the meal category. <br><br>
			Because these ingredients are chosen at random and not revealed to the player until the game starts, the chefs have to think on their feet. <br><br>

			After all chefs have had a turn, the Judge chooses which chef they feel is the best fit to cook the dish for them and
			the Chef gets a point. <br><br>
			A new Judge is chosen and the cycle begins again.</h5>
`;

var strings = {
	app_welcome: "Welcome to ",
	app_name: "the Annual Master Chef Competition",
	player_count: "How many players?",
	num_1: "1",
	num_2: "2",
	num_3: "3",
	num_4: "4",
	num_5: "5",
	num_6: "6",
	num_7: "7",
	num_8: "8",
	num_9: "9",
	num_10: "10",
	player: "Player",
	player_name: "Player Name ",
	start_game: "Start the Game!",
	how_do_i_play: "How do I play?",
	game_rules: $.parseHTML(gameRules),
	applicant: "Chef",
	qualification: "Ingredients",
	employer: "Judge",
	next_qualification: "Next Ingredient",
	quals: "Quals",
	who_is_new_employee: "Which chef will you choose?",
	past_quals: "The Chefs' Ingredients",
	player_won: "Player 1 is the New Master Chef!",
	next_round: "Next Round",
	end_game: "End this Game",
	wanted: "wants",
	next_applicant: "Next Chef",
	next_qualification: "Next Ingredient",
	is_the_new: " will be the Master Chef of ",
	current_scores: "The Score",
	reset: "Reset Timer"
};

$(function() {	
	$("[data-localize]").each(function( i ) {
		keys = $(this).data( "localize" ).split(" ");
		replacement = "";
		for (i = 0; i < keys.length; i++) {
		  replacement += strings[keys[i]];
		}
	  $(this).text(replacement);
		if( $(this).prop("tagName").toLowerCase() == "input" ) {
		  $(this).attr("placeholder", replacement);
		}
	});
	
	$('body').attr("dir", textDir);
	if( textDir == "rtl" ) {
		$('.timer-container:first').css('float','left');
	}
});