const express = require("express")
const cors = require('cors')
require("dotenv").config()
const {Configuration, OpenAIApi} = require("openai")
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

const config = new Configuration({
    apiKey : process.env.OPEN_AI_KEY,
})


const openAi = new OpenAIApi(config)


app.post("/flashcard", async (req,res) => {
    const { number, difficultyLevel, subject, optionalSection } = req.body
    try{
        const response = await openAi.createCompletion({
            model : "text-davinci-003",
            prompt:  `Create ${number} unique ${difficultyLevel} flashcards about ${subject} specifically ${optionalSection}.The questions are meant for academic uses so don't include too broad questions. Return in json format,get rid of new lines,and have question and answer in different key-value pairs`, max_tokens: 50, temperature:1.5,top_p: 1.0,frequency_penalty: 0.0,presence_penalty: 0.0, stop: ["{}"]
        })
        return res.status(200).json({
            success : true,
            data : response.data.choices[0].text
        }
        )
    }
    catch(error){
        return res.status(400).json({

            success : false,
            error : error.response ? error.response.data : "There was an issue on the server"
        })

    }

})

const port = process.env.PORT || 3002

app.listen(port, () => console.log(`Server listening on port ${port}`))
