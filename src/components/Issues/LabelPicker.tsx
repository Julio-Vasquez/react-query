import { useGetLabelsRQ } from '../../hooks/useGetLabels'
import { Loading } from '../Loading'

export const LabelPicker = () => {
  const { queryKey, loading, labels } = useGetLabelsRQ()
  console.log(queryKey)

  if (loading) return <Loading />

  return (
    <>
      {labels?.sort().map(label => (
        <div key={label.id}>
          <span
            className="badge rounded-pill m-1 label-picker"
            style={{
              border: `1px solid #${label.color}`,
              color: `#${label.color}`,
            }}
          >
            {label.name}
          </span>
        </div>
      ))}
    </>
  )
}
