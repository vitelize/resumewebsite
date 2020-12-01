const database = {}
// const mongoose = require("mongoose");
const uri = "mongodb+srv://readonly:z87UHzF3Vl38fwHl@cluster0.ayd27.mongodb.net/PersonalWS?retryWrites=true&w=majority";
 console.log(uri);
 
// mongoose
  // .connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
	// useMongoClient:true 
  // })
  // .then(() => console.log("Database connected!"))
  // .catch(err => console.log(err));

 database.connect = async () => {
    // /**
 // * Import MongoClient & connexion à la DB
 // */
    // // const MongoClient = require('mongodb').MongoClient;
	 const dbName = 'PersonalWS';
	
	
	
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://readonly:z87UHzF3Vl38fwHl@cluster0.ayd27.mongodb.net/PersonalWS?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
let db;

 client.connect(err => {
			 console.log("Connection to MongoDB Server : mongo "+err);

	 db = client.db(dbName);
		 database.db = db
 });

	
    // //const url = 'mongodb://localhost:27017';
	// //readonly user
	// // const url = 'mongodb+srv://readonly:'+process.env.PWD_MONGO+'@cluster0.ayd27.mongodb.net/PersonalWS?ssl=true&sslValidate=false'
    // // let db
    // // MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
		// // console.log("Connection to MongoDB Server : mongo "+err);
		// // db = client.db(dbName);
		// // database.db = db
    // // });
}

module.exports = database