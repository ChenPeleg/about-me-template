import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">John Doe</h1>
      
      <nav className="mb-8">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-purple-800 hover:text-purple-600">Home</Link>
          </li>
          <li>
            <Link to="/resume" className="text-purple-800 hover:text-purple-600">Resume</Link>
          </li>
          <li>
            <Link to="/contact-info" className="text-purple-800 hover:text-purple-600">Contact Info</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
