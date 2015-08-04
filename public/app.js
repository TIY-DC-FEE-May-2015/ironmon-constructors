var express = require('express');
var path = require('path');

var app = express();
var u = require('underscore');

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/book", function(req, res){

	res.json({ books: listOfBooks })

})

app.get("/book/:id", function(req, res){
	book = u.find(listOfBooks, function(book){
		return book.id === parseInt(req.params.id) //sets find to find that id in listOfBooks - parsing so just a num (type coercion)
	})
	res.json( book )
})

var listOfBooks = [
	{ id: 1, title: "Catcher in the Rye", author: "JD Salinger", description: "Holds up better than people think"},
	{ id: 2, title: "Hatchet", author: "Gary Paulsen", description: "survival training for tweens"},
	{ id: 3, title: "Unbroken", author: "EL James", description: "WW2 Running"},
	{ id: 4, title: "How to Train your Dragon", author: "a nerd", description: "Surprisingly unhelpful"}
]

module.exports = app;