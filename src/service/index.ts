import { runData } from "./data.fixture"
import config from "./config"
const { headers, baseUrl } = config
const service: IService = {
  async getRunData() {
    return Promise.resolve(runData)
  },
  async getWeatherConditions() {
    const response = await fetch(`${baseUrl}`, {
      headers,
    })
    const data = await response.json()
    return data
  },
}

export default service
