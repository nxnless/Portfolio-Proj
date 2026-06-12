import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' // 1. Import ตัวนี้เพิ่มเข้ามา
// import './index.css'
import router from './MainRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 3. เปลี่ยนจาก <App /> เดิม เป็นแผงควบคุม Router ตัวนี้ */}
    <RouterProvider router={router} />
  </StrictMode>,
)