type RunDataPayload = { records: Array<RunDataDTO> }
type WeatherDataPayload = { data: Array<WeatherDataDTO>; meta: WeatherMetaDTO }

type RunDataDTO = {
  id: string
  createdTime: string
  fields: RunDataFields
}

type WeatherDataDTO = {
  time: string
  airTemperature: {
    smhi: string
  }
  waveHeight: {
    noaa: number
    meteo: number
  }
}

type WeatherMetaDTO = {
  dailyQuota: number
  lat: number
  lng: number
  requestCount: number
}

type RunDataFields = {
  avg_km: number
  date: string
  precipitation: number
  run_distance: number
  run_duration: number
  temperature: number
  wind_direction: keyof typeof WindDirection
  wind_speed: number
}

type RunDataRecords = Array<RunDataFields>
