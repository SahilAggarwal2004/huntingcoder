// Note that this is not a typical nextjs middleware
import mongoose from 'mongoose';

const mongoConnect = handler => async (req, res) => {
    // Use current db connection if connection is present
    if (mongoose.connections[0].readyState) return handler(req, res);

    // Use new db connection if connection is not present
    await mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Connected to Database!')
    return handler(req, res);
};

export default mongoConnect;