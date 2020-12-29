import { reactive } from "vue"
import service from "../service/index"

function formatAsRunData(data: RunDataPayload) {
  return data.records.map((record) => record.fields)
}
const store: IStore = {
  state: reactive({
    runData: [],
  }),
  async fetchData() {
    const data = await service.getRunData()
    this.state.runData = formatAsRunData(data)
  },
}

export default store
