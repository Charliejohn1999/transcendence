import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState<string>('Loading...')

  useEffect(() => {
    fetch('http://localhost:3000/api/health')
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.ok ? 'OK' : 'KO')
      })
      .catch((err) => {
        console.error(err)
        setStatus('Erreur de connexion au backend')
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Transcendence</h1>
      <p className="text-lg">
        Backend status:{' '}
        <span className="font-mono bg-gray-800 px-3 py-1 rounded">
          {status}
        </span>
      </p>
    </div>
  )
}

export default App