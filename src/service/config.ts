const lat = 58.7984
const lng = 17.8081
const params = "waveHeight,airTemperature"

export default {
  baseUrl: `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
  headers: {
    Authorization: `${process.env.VUE_APP_STORMGLASS_API_KEY}`,
  },
}
