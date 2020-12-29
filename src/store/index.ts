
import { reactive } from "vue"
import service from "../service/index.ts"

const store = {
    state: reactive({}),
    async getRunData(){
        const data = await service.getRunData()
        console.log(data)
    }
}



export default store