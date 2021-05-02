interface IService {
  getRunData(): Promise<RunDataPayload>
  getWeatherConditions(): Promise<WeatherDataPayload>
}
