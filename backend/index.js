const ConnectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

ConnectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`iDogs Backend app listening on port ${port}`)
})






















//////////////////////////////////////////////////////////////////////////////////////////////
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;

// const url = 'mongodb://localhost:27017/PetAdoption';
// const dbName = 'PetAdoption';
// const collectionName = 'listed-for-adoption';

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, 'public/uploads/');
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });


// const upload = multer({ storage: storage });


// // Route for displaying the form
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/pet-listing.html');
//   });



// app.post('/addpet', upload.single('pet_photo'), function(req, res) {

//     console.log('Add pet route called');
//     console.log('Pet name:', req.body.pet_name);
//     console.log('Pet breed:', req.body.pet_breed);
//     console.log('Pet gender:', req.body.pet_gender);
//     console.log('Size:', req.body.size);
//     console.log('Pet age:', req.body.pet_age);
//     console.log('Owner contact:', req.body.owner_contact);
//     console.log('Pet photo:', req.file.filename);
//     console.log('Pet description:', req.body.pet_description);

//   const pet = {
//     pet_name: req.body.pet_name,
//     pet_breed: req.body.pet_breed,
//     pet_gender: req.body.pet_gender,
//     size: req.body.size,
//     pet_age: req.body.pet_age,
//     owner_contact: req.body.owner_contact,
//     pet_photo: req.file.filename,
//     pet_description: req.body.pet_description
//   };

//   MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
//     if (err) throw err;

//     const db = client.db(dbName)
//     const collection = db.collection(collectionName);

//     collection.insertOne(pet, function(err, result) {
//       if (err) throw err;

//       console.log('Pet added to database');
//       res.redirect('/');
//     });
//     client.close();
//   });
// });

// // // use morgan to log server requests
// // app.use(morgan('dev'));

// app.listen(3000, function() {
//   console.log('Server started on port 3000');
// });
