// import * as fs from 'fs'
import mongoConnect from '../../middleware/mongodb'
import Blog from '../../models/blogs'

async function fetchall(req, res) {
    // readdir(path realtive to website(not the current file) and without initial '/', callback(error, data)) to read files(name only inside an array) inside a directory/folder
    // let blogs = [];
    // const data = await fs.promises.readdir('blogdata') // data will be an array
    // for (let index = 0; index < data.length; index++) {
    //     const blog = data[index];
    //     const response = await fs.promises.readFile(`blogdata/${blog}`, 'utf-8')
    //     blogs.push(JSON.parse(response))
    // }

    // Now fs doesn't work with nextjs api in prodution as these apis are serverless and do not have their own storage. It was working on local system as there, ther were able to find storage for fs to work. So to overcome this, we will use DB.
    const blogs = await Blog.find().select('-_id')
    res.status(200).json(blogs)
}

export default mongoConnect(fetchall)