import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ImageGenerator from './ImageGenerator/ImageGenerator.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageGenerator/>
  </StrictMode>,
)
