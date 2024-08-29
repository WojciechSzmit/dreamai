import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/completion', { prompt });
      setResponse(res.data); // Store the response object
    } catch (error) {
      console.error('Error fetching completion', error);
    }
  };

  return (
    <div className="container">
      <h1>Completion Generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
        />
        <button type="submit">Generate</button>
      </form>
      <div className="response-container">
        <h2>Response:</h2>
        {response && (
          <div>
            <p><strong>Prompt:</strong> {response.prompt}</p>
            <p><strong>Images:</strong></p>
            {response.images && response.images.map((image, index) => (
              <img key={index} src={image.url} alt={`Generated ${index}`} />
            ))}
            <p><strong>Timings:</strong> {JSON.stringify(response.timings)}</p>
            <p><strong>Seed:</strong> {response.seed}</p>
            <p><strong>Has NSFW Concepts:</strong> {response.has_nsfw_concepts ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
