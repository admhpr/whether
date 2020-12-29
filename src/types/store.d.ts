interface IStore {
  state: {
    runData: RunDataRecords
  }
  fetchData(): void
}
