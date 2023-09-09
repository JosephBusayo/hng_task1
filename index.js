const express = require('express')
const app = express()

const cors = require('cors')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(express.json())


//code`
const date = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[date.getDay()];


app.get('/api', (req, res) => {
    const {slack_name, track} = req.query

    try{
        res.setHeader('Content-Type', 'application/json');
        res.send({
            "slack_name": slack_name,
            "current_day": currentDay,
            "utc_time": new Date().toISOString().split('.')[0] + 'Z',
            "track": track,
            "github_file_url": "https://github.com/JosephBusayo/hng_task1/blob/main/index.js",
            "github_repo_url": "https://github.com/JosephBusayo/hng_task1",
            "status_code": 200
        })
    }catch(err){
        res.send(err)
    }
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

