import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';


export const connect = async() => {
    const mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    mongoose.connect(uri, mongooseOpts)
}

export const closeDatabase = async() => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
}

export const clearDatabase = async() => {
    const collections = mongoose.connection.collection;
    for (const key in collections) {
        const collection = collections[key]
        await collection.deleteMany();
    }
}