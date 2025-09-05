import { Link } from 'react-router-dom'

export default function Dashboard() {
  const groups = [{ id: 1, name: '旅行' }, { id: 2, name: '飲み会' }]
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">グループ</h1>
      <ul className="space-y-2">
        {groups.map(g => (
          <li key={g.id} className="border p-3 rounded">
            <Link to={`/groups/${g.id}`} className="text-primary">{g.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

