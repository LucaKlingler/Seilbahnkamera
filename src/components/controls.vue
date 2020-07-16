<template>
  <div>
    <b-button class="buttons" v-on:click="right()">RIGHT</b-button>
    <br>
    <b-button class="buttons" v-on:click="left()">LEFT</b-button>
    <br>
    <b-button class="buttons" v-on:click="stop()">STOP</b-button>
  </div>
</template>

<script>
export default {
  name: 'controls',
  methods: {
    right(){
      this.$socket.emit('chat message','1:120&2:1');
    },
    left(){
      this.$socket.emit('chat message','1:120&2:2');
    },
    stop(){
      this.$socket.emit('chat message','1:0&2:1');
    }
  }
}
</script>

<style>
.buttons{
  margin: 10px;
}
</style>