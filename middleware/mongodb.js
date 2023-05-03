// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

const uri = process.env.URI;
if (!uri) throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');

const options = {};

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        var client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    var clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

// the below line is equivalent to const mongoConnect = (handler)=>{return (req, res)=>{return handler(req, res)}}
export const mongoConnect = handler => (req, res) => {
    // Use current db connection if connection is present
    if (mongoose.connections[0].readyState) return handler(req, res);

    // Use new db connection if connection is not present
    mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('Connected to Database!')
    return handler(req, res);
};