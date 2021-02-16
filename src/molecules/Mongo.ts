// interface IUser extends Document {
//   email: string;
//   firstName: string;
//   lastName: string;
// }

// class Mongo {
//   private static mongoose = require('mongoose');
//   public static conectar() {
//     this.mongoose.connect('mongodb://localhost:27017/Loja', { useNewUrlParser: true });
//     let db = this.mongoose.connection;
//     db.on('error', console.error.bind(console, 'Connection error: '));
//     db.once('open', function () {
//       //The code in this asynchronous callback block is executed after connecting to MongoDB. 
//       console.log('Successfully connected to MongoDB.');
//     });
//   }
// }
// export default Mongo;