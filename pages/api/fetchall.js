import * as fs from 'fs'

export default async function fetchall(req, res) {
    // readdir(path realtive to website(not the current file) and without initial '/', callback(error, data)) to read files(name only inside an array) inside a directory/folder
    let blogs = [];
    const data = await fs.promises.readdir('blogdata') // data will be an array
    for (let index = 0; index < data.length; index++) {
        const blog = data[index];
        const response = await fs.promises.readFile(`blogdata/${blog}`, 'utf-8')
        blogs.push(JSON.parse(response))
    }
    res.status(200).json(blogs)
}