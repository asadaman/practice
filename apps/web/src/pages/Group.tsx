import { useParams } from 'react-router-dom'

export default function Group() {
  const { id } = useParams()
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">グループ #{id}</h1>
      <p>支出一覧や追加フォームをここに配置します。</p>
    </div>
  )
}

