import { useState, useEffect, useRef } from 'react'
import './App.css'
import Footer from './components/Footer'
import FloatingNavbar from './components/FloatingNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hom from './pages/Hom'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Projects from './pages/Projects'

function App() {
  
  return (
      <Routes>

        <Route path="/" element={<Hom />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route path="/projects" element={<Projects />} />

      </Routes>
  )
}

export default App
