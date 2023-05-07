import clientPromise from "../../middleware/mongodb";

export const config = {
    runtime: "edge"
};

export default async function fetchBlogs(req, res) {
    const client = await clientPromise
    const collection = client.db().collection('blogs')
    const blogs = await collection.find().toArray();
    res.json(blogs)
}