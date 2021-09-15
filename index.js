//require libs
const express = require('express');
const app = express();
const cors = require('cors');
//require json paths
const bananaImages = require('./json/banana/images.json')
const bananaAttributions = require('./json/banana/attributions.json')

//banana api path
app.get('/banana/random/:format', (req, res) => {
    if (req.params.format === "json") {
        res.json({
            "image": bananaImages[Math.floor(Math.random() * bananaImages.length)],
            "attribution": bananaAttributions[Math.floor(Math.random() * bananaAttributions.length)]
        })
    } else if (req.params.format === "raw") {
        
    }
})

app.listen(3000)