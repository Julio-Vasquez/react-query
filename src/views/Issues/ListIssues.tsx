import { IssueList } from '../../components/Issues/IssuesList'
import { LabelPicker } from '../../components/Issues/LabelPicker'

export default function ListView() {
  return (
    <div className="row mt-5">
      <div className="col-8">
        <IssueList />
      </div>

      <div className="col-4">
        <LabelPicker />
      </div>
    </div>
  )
}
