//TODO:
//ticker box to describe what's happening
	//indicator of who's turn it is
//SFX on action

var game
var templates = {}

var deathCheck = function(side) {

	if (templates[side].active() === false) {
		loser = templates[side]
		if (side === "left") {
			winner = templates.right
		} else {
			winner = templates.left
		}

		$(".marquee").toggleClass("active").text("GAME OVER")

		alert(winner.name+" has viciously defeated "+loser.name)
		$(".fighterSelection").toggleClass("active")
		$(".controls").toggleClass("active")

		tick = new Date()
		date = tick.toLocaleDateString()

		var $htmlString = templates.winners({
			winner: winner.name,
			loser: loser.name,
			winnerHealth: winner.health,
			loserHealth: loser.health,
			date: date,
		})

		templates.right = {};
		templates.left = {}

		$(".stats").text("")
		$(".winnerBoard").prepend($htmlString)

		$("input[value=right]").removeAttr("checked")
		$("input[value=left]").prop("checked", "checked")

	}
}

var updateDisplay = function(side) {
	var $htmlString = templates.stats(templates[side])

	$(".stats."+side+"").html($htmlString)	
//	$(".stats.left").html(templates.left)
//	$(".stats.right").html(templates.right)
	deathCheck(side)
}

var addIronmon = function() {
	var name = $("#name").val()
	var type = $("#type").val()
	var side = $("input[name=side]:checked").val()

	templates[side] = new Ironmon(name, type)
	
	if (templates.right) {
		if (templates.right.name === templates.left.name) {
			templates.right.name = name+" the second"
		}
	}

	console.log(templates)
	updateDisplay(side)

	$(".stats."+side+"").addClass(type)

	$("#name").focus().select()
}



$(document).on("ready", function(){

	/* tab to change selection - not working
	$("fighterSelection").keydown(function(event){
		var code = event.keyCode
		if (code === 9) {
			console.log($(this).next(".select"))
			$(this).next("tabindex").focus()
		}
	})*/

	$("#name").focus()

	$("#submit-fighter").on("click", function () {
		addIronmon()
		$("input[value=left]").removeAttr("checked")
		$("input[value=right]").prop("checked", "checked")
		if (templates.left.name && templates.right.name) {
			$(".ready").addClass("active")
		}
	})

	$(".ready").on("click", function(){
		$(".fighterSelection").toggleClass("active")
		$(".controls").toggleClass("active")
		$(".marquee").toggleClass("active")
		game = new Game()
		$(this).toggleClass("active")
	})

	$("#attack").on("click", function(){
		if (game.turn) {
			templates.left.attack(templates.right)
			updateDisplay("right")
		} else {
			templates.right.attack(templates.left)
			updateDisplay("left")
		}

		game.takeTurn()

	})

	$("#heal").on("click", function(){
		if (game.turn) {
			templates.left.heal()
			updateDisplay("left")
		} else {
			templates.right.heal()
			updateDisplay("right")
		}

		game.takeTurn()		
	})

	$("#train").on("click", function(){
		if (game.turn) {
			templates.left.train()
			updateDisplay("left")
		} else {
			templates.right.train()
			updateDisplay("right")
		}

		game.takeTurn()		
	})

	

	templates.stats = Handlebars.compile($("#playerTemplate").html())
	templates.winners = Handlebars.compile($("#winnerTemplate").html())


})