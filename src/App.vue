<template>
  <div id="app">
    <layout streamUrl='http://192.168.0.63:8080/stream.mjpg'>
      <template v-slot:videocomponent></template>
      <template v-slot:controlcomponent><Controls/></template>
      <template v-slot:queuecomponent><Queue/></template>
    </layout>
  </div>
</template>

<script>
  import Controls from './components/controls.vue'
  import Layout from './submodules/base_layout/src/components/interface.vue'
  import Queue from './components/SimpleQueueComponent.vue'
  export default {
    name: 'App',
    components: {
      Controls,
      Layout,
      Queue,
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>