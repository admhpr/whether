import {runData} from "./data.fixture"


const service: IService = {
    async getRunData(){
        return Promise.resolve(runData)
    }
}

export default service