type RunDataDTO = {
  id: string
  createdTime: string
  fields: RunDataFields
}
enum WindDirection {
  N,
  S,
  E,
  W,
  NE,
  NW,
  SE,
  SW,
}

type RunDataFields = {
  avg_km: number
  date: Date
  precipitation: number
  run_distance: number
  run_duration: number
  temperature: number
  wind_direction: WindDirection
  wind_speed: number
}

type RunDataRecords = Array<RunDataFields>
