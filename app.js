var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url,function(err,db){
	var collection = db.collection('restaurants');
	/*allChoice*************************************************
	var allChoice = prompt("Type 'all' and press enter to display all restaurants'names:");
	if (allChoice == "all"){
		collection.find().toArray(function(err,doc){
			console.log(doc);
		});
	}else {
		console.log("MMMM, restaurants see you don't want to?");
	}
}); (remade this cluster with each exercise/ only need 1 if all are uncommented)
	end allChoice***************************************************/
	/*begin oneChoice***********************************************
	var oneChoice = prompt("Type a restaurant name and press enter to view:");
	collection.find().forEach(function(item,index){
	if (oneChoice == item.name){
			console.log(item);
	}
	});
});(remade this cluster with each exercise)
	end oneChoice*****************************************************/
	var mkRestName = prompt("Type a restaurant name to begin creating a restaurant:");
	// var mkRestAddress = prompt("Type the restaurant's address:");
	// var newRest = collection.insert({"name":mkRestName,"address":mkRestAddress});
	console.log(mkRestName);
});