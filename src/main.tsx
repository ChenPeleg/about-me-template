import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Resume from './pages/Resume.tsx'
import ContactInfo from './pages/ContactInfo.tsx'
import KnowledgeBase from './pages/KnowledgeBase.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact-info',
        element: <ContactInfo />,
      },
      {
        path: 'knowledge-base',
        element: <KnowledgeBase />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
