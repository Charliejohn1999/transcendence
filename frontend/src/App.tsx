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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Transcendence</h1>
      <p>Backend status: <strong>{status}</strong></p>
    </div>
  )
}

export default App