<template>
  <div>
    <pre>{{ runRecord }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
export default defineComponent({
  props: {
    runRecord: {
      type: Object as PropType<RunDataFields>,
      default: () => ({}),
    },
  },
})
</script>

<style lang="scss" scoped></style>
