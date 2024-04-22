<template>
  <div class="home">
    <a-button>sdhjasdhjaks</a-button>
    <a-button type="dashed"> 测试 </a-button>
    <input type="file" id="fileInput" />
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import store from '../store'

  const test = () => {
    console.log(store.state.test)
  }
  onMounted(() => {
    test()
  })
</script>
