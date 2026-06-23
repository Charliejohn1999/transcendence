import { useEffect, useState } from 'react'

function Home() {
  const [status, setStatus] = useState<string>('Loading...')
  const prix = "yo man";
  useEffect(() => {
    fetch('/api/health')
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
    <div className="flex flex-col items-center justify-center flex-1">
      <h1 className="text-5xl font-bold mb-4">Transcendence</h1>
        <h2>{prix}</h2>
      <p className="text-lg">
        Backend status:{' '}
        <span className="font-mono bg-gray-800 px-3 py-1 rounded">
          {status}
        </span>
      </p>
    </div>
  )
}

export default Home