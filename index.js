import {Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


const config = new Configuration({
    organization: "org-SEwtFF4x0hSscXwlOYMGMUSr",
    apiKey: "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 ",
});

const openai = new OpenAIApi(config);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {role: "user", content: "Good evening"},
    ]
});


console.log(completion.data.choices[0].message);

