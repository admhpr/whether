const lat = 58.7984
const lng = 17.8081
const params = "waveHeight,airTemperature"

export default {
  baseUrl: `https://api.stormglass.io/v2`,
  weatherResource: `/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
  tideResource: `/tide/sea-level/point?lat=${lat}&lng=${lng}&start=2020-02-24&end=2020-02-25`,
  headers: {
    Authorization: `${process.env.VUE_APP_STORMGLASS_API_KEY}`,
  },
}
