import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LazyMotion, domMax } from 'motion/react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { TooltipProvider } from '@/components/ui/tooltip'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={domMax} strict>
      <BrowserRouter>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </BrowserRouter>
    </LazyMotion>
  </StrictMode>,
)
