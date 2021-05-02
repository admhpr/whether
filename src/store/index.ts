import { reactive } from "vue"
import service from "../service/index"

function formatAsRunData(data: RunDataPayload) {
  return data.records.map((record) => record.fields)
}
const store: IStore = {
  state: reactive({
    runData: [],
    weatherConditions: [],
  }),
  async fetchData() {
    const runData = await service.getRunData()
    const weatherConditions = await service.getWeatherConditions()
    this.state.runData = formatAsRunData(runData)
    this.state.weatherConditions = weatherConditions
  },
}

export default store
