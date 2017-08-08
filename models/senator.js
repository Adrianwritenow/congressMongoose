const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/senatorsdb');

const senatorSchema = new Schema({
  id: {type: Number, required: true},
  party: {type: String, required:true},
  state: {type: String, required:true},
  person: { gender: {type: String, required:true},
              firstname: {type: String, required:true},
              lastname: {type: String, required:true},
              birthday: { type: Date, required: true }
          },
  phone:{type: String, required: true},
  extra : {
		address : {type: String, required:true},
		contact_form :{type: String, required:true},
		fax : {type: String, required:true},
		office : {type: String, required:true}
	},
})

senatorSchema.statics.findAndSort = function (anyRestriction, whatToRender){
  this
    .find(anyRestriction)
    .then(function(results){
      whatToRender(results);
    });
}



const Senator = mongoose.model('Senator', senatorSchema, 'senators');

module.exports = Senator;
