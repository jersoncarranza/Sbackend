var mongoose = require('mongoose'),
	Schema	 = mongoose.Schema;
/*mongoose.connect('mongodb://localhost/naruto2');*/
//mongoose.connect('mongodb://nodejitsu:4f4c928a06a7a407bd144a7a8eecbc37@troup.mongohq.com:10047/nodejitsudb2096137921');
 mongoose.connect('mongodb://snatly:k0985527750@ds041157.mongolab.com:41157/dbsnatly')  

var FileSchema = new Schema({
	subject: {type:String, require:true},//nombre materia
	description: {type:String, require:true},//descripcion
	teacher:{type:String, require:true},//profesor
	level:  {type:String,require:true},//nivel
	code:   {type:String,require:true},//codigo
	homework: [{
		partial_n:String,
		homework_n:[{
			description:String,
			url:String
		}],
	}],
	exam:[{
		partial_n:String,
		description:String,
		url:String	
		}],
	materia:[{
		partial_n:String,
		materia_n:[{
			description:String,
			url:String
		}],
	}] 
});
FileSchema.set('toJSON',{
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret._id;
		delete ret._v;
	}
});

var File = mongoose.model('File', FileSchema);
module.exports = File;