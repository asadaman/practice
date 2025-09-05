import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Group from './pages/Group'

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b p-4 flex items-center justify-between">
        <Link to="/" className="font-semibold">Split Bill</Link>
        <nav className="space-x-3">
          <Link to="/dashboard" className="text-sm text-primary">Dashboard</Link>
        </nav>
      </header>
      <main className="p-4 max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups/:id" element={<Group />} />
        </Routes>
      </main>
    </div>
  )
}

