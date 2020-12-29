type RunDataPayload = { records: Array<RunDataDTO> }

type RunDataDTO = {
  id: string
  createdTime: string
  fields: RunDataFields
}
enum WindDirection {
  N = "N",
  S = "S",
  E = "E",
  W = "W",
  NE = "NE",
  NW = "NW",
  SE = "SE",
  SW = "SW",
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
