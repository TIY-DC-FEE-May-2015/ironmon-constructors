function displayLeftSide (arrayOfBooks) {

	_.each(arrayOfBooks.books, function(book){
		var htmlString = templates.leftBook( book )
		
		//this gives us book to do stuff with, like binding
		var $book = $(htmlString)

		$("#leftSide").append($book)

		//this is not garbage collected - it remembers even after the each loop finishes
		$book.on("click", function(){

			getSpecificBook(book.id, displayRightSide) //gSB is a callback fn so pass in dSR

		})

	})

}

var displayRightSide = function(SpecificBook) {
	$("#rightSide").html($templates.rightBook(book))
}

var getAllBooks = function(callback){

	$.ajax({
		url: "/book",
		method: "GET",
		success: callback
	})

}

var getSpecificBook = function(id, callback){ //note this takes id as a param
	$.ajax({
		url: "/book/" + id,
		method: "GET",
		success: callback
	})
		/*  here's what would have worked for me with cold remedies:
		success: function(data){
			callback(id, data)
		}
		*/
}

var templates = {}

$(document).on("ready", function(){

	//getAllBooks(function(){ //this is the function that will be called back by getAllBooks})

	templates.leftBook = Handlebars.compile($("#leftSideBook").html())
	templates.rightBook = Handlebars.compile($("#rightSideBook").html())
	getAllBooks(displayLeftSide)



})