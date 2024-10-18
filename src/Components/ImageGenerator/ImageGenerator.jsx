// src/App.js
import  { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('/');
  const [loading, setLoading] = useState(false);

  // Function to generate an image from a text prompt using Hugging Face API
  const generateImage = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image', // Replace with your preferred model
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
          responseType: 'blob', // Set responseType to 'blob' for image response
        }
      );

      // Create a URL for the image blob and display it
      const imageBlob = new Blob([response.data]);
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImageUrl(imageObjectURL);

    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex m-auto flex-col items-center gap-5 mt-16'>
    <h1 className='text-2xl'>AI Image <span className='text-fuchsia-400'>Generator</span></h1>
    <img className='w-80' src={imageUrl==="/" ? "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : imageUrl} alt="" />

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your image description here"
        className="mt-2 w-96 rounded-lg border-black  align-top shadow-sm sm:text-sm"
    rows="4"
        cols="50"
        style={{ marginBottom: '10px', padding: '10px' }}
      />

      <br />

      <button onClick={generateImage} className='px-2 py-2 bg-fuchsia-400 text-white rounded-full' disabled={loading || !prompt} style={{ padding: '10px 20px' }}>
        {loading ? 'Generating...' : 'Generate Image'}
      </button>

    </div>
  );
};

export default App;
