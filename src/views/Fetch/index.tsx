import SimpleFetch from '../../components/Fetchs/SimpleFetch'
import SimpleFetchRQ from '../../components/Fetchs/SimpleFetchRQ'

import './styles.css'

export default function Fetch() {
  return (
    <div className="app">
      <div>
        <SimpleFetch />
      </div>
      <div>
        <SimpleFetchRQ />
      </div>
    </div>
  )
}
