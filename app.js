var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url,function(err,db){
	var collection = db.collection('restaurants');
	
	var allChoice = prompt("Type 'all' and press enter to display all restaurants'names:");
	if (allChoice == "all"){
		collection.find().toArray(function(err,doc){
			console.log(doc);
		});
	}else {
		console.log("MMMM, restaurants see you don't want to?");
	}

	
	// choose one restaurant
	var oneChoice = prompt("Type a restaurant name and press enter to view:");
	collection.find().forEach(function(item,index){
	if (oneChoice == item.name){
			console.log(item);
	}
	});
	// create restaurant
	var mkRestName = prompt("Type a restaurant name to begin creating a restaurant:");
	console.log(mkRestName);
	var mkRestAddress = prompt("Type the restaurant's address:");
	console.log(mkRestAddress);
	collection.insert({"name":mkRestName,"address":mkRestAddress});
	console.log();
});