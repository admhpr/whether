import {runData} from "./data.fixture.ts"
const service = {
    getRunData(){
        return Promise.resolve(runData)
    }
}

export default service