import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-xl font-semibold mb-4">ログイン</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-3 py-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-primary text-white px-4 py-2 rounded w-full">続ける</button>
      </form>
    </div>
  )
}

