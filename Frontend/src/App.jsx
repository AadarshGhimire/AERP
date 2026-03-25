import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import StorePage from './pages/StorePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import MockExamPage from './pages/MockExamPage.jsx'
import Store from './components/Store/Store.jsx'
import AdminDashboard from './admin/AdminDashboard'
import ManageCourses from "./admin/ManageCourses";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/resources' element={<ResourcesPage />} />
      <Route path='/store' element={<StorePage />} />
      <Route path='/store/books' element={<Store />} />
      <Route path='/courses' element={<CoursesPage />} />
      <Route path="/exam/:id" element={<MockExamPage />} />
      {/* Admin panel */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/courses" element={<ManageCourses />} />
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
