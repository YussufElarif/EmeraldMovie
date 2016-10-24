var mongoose = require('mongoose');
var UserScema
var FavouriteSchema = new mongoose.Schema({
  movie_id : {type: Number, required:true},
  type : {type: String, required:true},
  user_id : {type: mongoose.Schema.ObjectId, ref: 'User'}
});

//validates more than one key to be unique


module.exports = mongoose.model('Favourite' , FavouriteSchema);
