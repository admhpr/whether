interface IStore {
  state: {
    runData: RunDataRecords
    weatherConditions: WeatherDataRecords
  }
  fetchData(): void
}
