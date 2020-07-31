<template>
  <div>
    <strong>Connected: {{connected}}</strong><br><br><br>
    <div>
      <h4>Controls</h4>
      {{leftPressed}}
      <b-button class="buttons"  @mouseup="left(true)" @mousedown="left(false)">LEFT</b-button>
      <b-button class="buttons" v-on:click="stop()">STOP</b-button>
      <b-button class="buttons" v-on:click="right()">RIGHT</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      right() {
        this.$socket.emit('chat message', '1:120&2:1');
      },
      left(go) {
        if (go) {
          this.$socket.emit('chat message', 'l1');
        } else {
          this.$socket.emit('chat message', 'l0');
        }
      },
      stop() {
        this.$socket.emit('chat message', '1:0&2:1');
      }
    },
    sockets: {
      connect: function () {
        console.log('socket connected')
        this.connected = true;
        this.$store.state.ownId = this.$socket.id
        this.$socket.emit("register_front")
      },
      disconnect: function () {
        console.log('socket disconnected')
        this.connected = false;
      },
      //CHANGEME: die Namen der Nachrichten hier reinkommen müssen mit dem Backend matchen (Funktionsname = Nachrichtenname)
      nsp_list: function (data) {
        console.log("NSPs:" + data);
      },
    },
    data: function () {
      return {
        connected: false,
        leftPressed: false,
      }
    },
  }
</script>

<style>
  .half {
    display: inline-block;
    max-width: 50%;
    width: 50%;
    vertical-align: top;
  }
</style>
