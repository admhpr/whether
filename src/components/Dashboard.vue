<template>
  <section>
    <pre>{{ state.weatherConditions }}</pre>
    <InfoCard
      :key="runRecord.id"
      v-for="runRecord in state.runData"
      :runRecord="runRecord"
    />
  </section>
</template>

<script>
import InfoCard from "./InfoCard.vue"
import { onMounted } from "vue"
import store from "../store"
export default {
  name: "Dashboard",
  components: {
    InfoCard,
  },
  props: {
    msg: String,
  },
  setup() {
    const { state } = store
    onMounted(() => {
      store.fetchData()
    })
    return {
      state,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
