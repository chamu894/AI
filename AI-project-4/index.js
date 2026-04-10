import ollama from 'ollama'

const response = await ollama.chat({
  model: 'llama3.1:8b',
  messages: [{ role: 'user', content: 'Why is the capital of Sri lanka?' }],
});
console.log(response.message.content);