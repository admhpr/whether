interface IStore {
  state: {
    runData: RunDataRecords
    weatherConditions: Weather
  }
  fetchData(): void
}
