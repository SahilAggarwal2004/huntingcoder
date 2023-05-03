import clientPromise from "../../middleware/mongodb";

export async function fetchBlogs() {
    const client = await clientPromise
    const collection = client.db().collection('blogs')
    const blogs = await collection.find().toArray();
    return blogs
}