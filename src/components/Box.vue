<template>
  <div class="box has-text-weight-bold " >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BoxTracker',
  data() {
    return {
      estilos: {
        background: "#FAF0CA"

    }
  }
}
})
</script>

<style scoped>
.box {
  background-color: var(--bg-box);
  color: var(--text-box);
}
</style>