import express from 'express'
import os from 'os' // Node.js module

const app = express()
const port = 3000

app.get("/", (req, res) => {
    const message = `Hello from ${os.hostname()}`
    res.send(message)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(os.hostname())
})


