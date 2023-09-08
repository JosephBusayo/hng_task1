const express = require('express')
const app = express()

const cors = require('cors')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(express.json())


//code`
const date = new Date();
const utcTime = date.toUTCString();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[date.getDay()];


app.get('/api/get', (req, res) => {
    const {slack_name, track} = req.query

    try{
        res.send({
            "slack_name": slack_name,
            "current_day": currentDay,
            "utc_time": utcTime,
            "track": track,
            "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
            "github_repo_url": "https://github.com/username/repo",
            "status_code": 200
        })
    }catch(err){
        res.send(err)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})