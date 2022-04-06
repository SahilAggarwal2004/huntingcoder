// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Now we know that files inside pages folder get rendered as it is, but nextjs also provides a api folder inside pages folder where we can write our backend code that will not be served in client production build and hence, making nextjs a backend framework also. In files inside api folder, we can write normal node.js code with the only difference to export the api function.
// Similarly console.log(s) will also be visible only in terminal and not on browser.

const fs = require('fs') // similar to import * as fs from 'fs'

// Currently we knew 3 ways to get data from client to server:
// a) params(/:variable)
// b) headers
// c) body
// There is another way using queries inside url:
// d) query(?variable=value) used below

export default async function fetchblog(req, res) { // here, we can see that code is similar to node.js
    // readFile(path realtive to website(not the current file) and without initial '/', encoding, callback(error, data)) to read single files
    const { slug } = req.query // req.query is an object which contains all the queries. In orer to get value for framework key, we must fetch api using api/file_name?slug=javascript
    // If more queries, ?query1=value1&query2=value2&query3=value3

    // fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8', (error, data) => {
    //     error ? res.status(404).json({ error: "Blog not found!" }) : res.status(200).json(JSON.parse(data))
    // })
    // Now problem with the above code is that it runs asynchronously. So to make it synchronous, we will use fs.promises instead which returns us a promise.
    const data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
    res.status(200).json(JSON.parse(data))
}

// After we have written the code this api can be fetched with relative path '/api/file_name', i.e., this folder also follows file-based routing. Also this folder also has default path as index.js. If api folder has index.js, then it will be accessible on relative path '/api'