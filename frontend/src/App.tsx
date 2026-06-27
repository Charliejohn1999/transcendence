import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <footer className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
          <Link to="/" className="hover:text-white mx-3">Home</Link>
          <Link to="/privacy" className="hover:text-white mx-3">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white mx-3">Terms of Service</Link>
          <Link to="/register" className="hover:text-white mx-3">Register</Link>
          <Link to="/login" className="hover:text-white mx-3">Login</Link>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App