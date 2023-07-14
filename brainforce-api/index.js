const express = require("express")
require("dotenv").config()
const {Configuration, OpenAIApi} = require("openai")
const app = express()
app.use(express.json())

const config = new Configuration({
    apiKey : process.env.OPEN_AI_KEY,
})

const openAi = new OpenAIApi(config)

app.post("/flashcard", async (req,res) => {
    try{
        const openAiUrl = 'https://api.openai.com/v1/chat/completions'
        const { number, difficultyLevel, subject, optionalSection } = req.body
        const response = await openAi.createCompletion({
            model : "gpt-3.5-turbo-0613",
            prompt: `Create ${number} ${difficultyLevel} flashcards about ${subject} specifically ${optionalSection}.`, max_tokens: 100, temperature: 0,top_p: 1.0,frequency_penalty: 0.0,presence_penalty: 0.0, stop: ["\n"]
        })
        return res.status(200).json({
            success : true,
            data : response.data.choices[0].text
        })
    }
    catch(error){
        return res.status(400).json({

            success : false,
            error : error.response ? error.response.data : "There was an issue on the server"
        })

    }

})

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server listening on port ${port}`))
