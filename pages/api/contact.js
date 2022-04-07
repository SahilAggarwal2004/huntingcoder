// till now, we craeted 2 api but we didn't mention any method to any of them both. Now we will create an api using only the post method.
import * as fs from 'fs'

export default async function contact(req, res) {
    // We will check the method of request using req.method use if-else to configure our api for specific methods
    if (req.method !== 'POST') return res.status(400).json({ msg: "Only post request allowed!" })
    // writeFile(path, data, callback)
    if (!req.body.email) return res.status(400).json({ msg: "Please provide email" })
    await fs.promises.writeFile(`contactdata/${req.body.email}.json`, JSON.stringify(req.body))
    res.status(200).json({ msg: "Succesfully submitted your response!" })
}