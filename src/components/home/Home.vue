<template>
  <div id="home">
    <h1>主页</h1>
    <vue-head></vue-head>
    <vue-menu></vue-menu>
    <vue-item-list></vue-item-list>
  </div>
</template>

<script>
  import Head from "./HomeHead.vue"
  import ItemList from "./HomeItemList.vue"
  import Menu from "./HomeMenu.vue"
  export default {
    components: {
      'vue-head': Head,
      'vue-item-list': ItemList,
      'vue-menu': Menu
    }

  }
</script>

<style>

</style>
