import ollama from 'ollama'
import express from 'express'

const app = express();

app.get('/test', async (req, res) => {

    const response = await ollama.chat({
  model: 'llama3.1:8b',
  messages: [{ role: 'user', content: 'Why is the capital of Sri lanka?' }],
});
res.send(response.message.content);

});

