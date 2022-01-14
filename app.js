const express = require('express')

const app = express()
const port = 3000
app.get('/', (req, res) => res.send("hello node minimum"))
app.listen(port, () => console.log(`started on port ${port}`))