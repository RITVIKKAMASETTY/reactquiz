import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import './components/App.css'
import {useQuiz, Quizcontext} from './components/context/Quizcontext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quizcontext>
    <App />
    </Quizcontext>
  </StrictMode>,
)
