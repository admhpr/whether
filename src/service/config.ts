// ballyholme beach
const lat = 54.66633
const lng = -5.63669
const params = "waveHeight,airTemperature,windDirection"

export default {
  baseUrl: `https://api.stormglass.io/v2`,
  weatherResource: `/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
  tideResource: `/tide/sea-level/point?lat=${lat}&lng=${lng}&start=2020-02-24&end=2020-02-25`,
  headers: {
    Authorization: `${process.env.VUE_APP_STORMGLASS_API_KEY}`,
  },
}
