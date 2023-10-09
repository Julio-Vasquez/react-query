import { useFetch } from '../../../hooks/useFetch'

import './styles.css'

export default function SimpleFetch() {
  const { loading, randomNumber, error, refetch } = useFetch()

  return (
    <div className="container">
      {loading ? (
        <p className="loading">Cargando ...</p>
      ) : (
        <h2>{randomNumber}</h2>
      )}

      {!loading && error && <h3 className="error">{error}</h3>}

      {!loading && !error && (
        <button onClick={() => refetch()}>Nuevo Número</button>
      )}
    </div>
  )
}
