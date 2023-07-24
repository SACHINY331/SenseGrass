import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb://127.0.0.1:27017/User';

    try {
   

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;

