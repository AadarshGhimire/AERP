import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
    </Route>
  )
)
export default function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}
