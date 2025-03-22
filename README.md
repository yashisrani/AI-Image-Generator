# AI Image Generator 🤖🪄

An AI-powered web application that generates unique images from text prompts using the Hugging Face Text-to-Image API. Built with React and styled using Tailwind CSS, this tool provides an intuitive interface for users to explore AI-generated visuals.

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

The things you need before installing the software.

* Node.js (v18 or above)
* npm or yarn
* Hugging Face API Key with access to a Text-to-Image model


### Installation

A step by step guide that will tell you how to get the development environment up and running.

1. Clone the Repositry:
2. 
   ```
   git clone https://github.com/yashisrani/AI-Image-Generator
   cd AI-Image-Generator
   ```
3. Install dependencies:
   
   ```
   npm install
   ```
4. Configure environment variables:

- Create a .env file in the root directory and add your Hugging Face API key.
- Make sure the variable name starts with VITE_ (required for Vite).
  
  ```
  VITE_API_KEY=your_huggingface_api_key
  ```
4. Run the development server:
   
   ```
   npm run dev
   ```

## Usage

1. Enter a description or prompt in the text box.
\
2. Click the "Generate Image" button.

3. The app will display an AI-generated image based on your prompt.

4. If no prompt is entered, the button will remain disabled.

## Deployment

If you wish to deploy the project, here are some additional notes:

### Server Environments
- Live: Production deployment (e.g., Vercel, Netlify)

- Release: Staging or test environments

- Development: Local environment using npm run dev

- Deployment Steps (Example with Vercel)
= Push your code to GitHub/GitLab/Bitbucket.

- Import your repository in Vercel.

- Add your VITE_API_KEY in the project settings → Environment Variables.

- Deploy!


