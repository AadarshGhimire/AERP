import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomePage />} />
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
