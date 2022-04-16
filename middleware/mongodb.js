// Note that this is not a typical nextjs middleware
import mongoose from 'mongoose';

// the below line is equivalent to const mongoConnect = (handler)=>{return (req, res)=>{return handler(req, res)}}
const mongoConnect = handler => (req, res) => {
    // Use current db connection if connection is present
    if (mongoose.connections[0].readyState) return handler(req, res);

    // Use new db connection if connection is not present
    mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Connected to Database!')
    return handler(req, res);
};

export default mongoConnect;