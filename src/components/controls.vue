<template>
  <div>
    <strong>Connected: {{connected}}</strong><br><br><br>
    <div>
      <h4>Controls</h4>
      <b-button class="buttons"  @mouseup="left(false)" @mousedown="left(true)">LEFT</b-button>
      <b-button class="buttons" @mouseup="right(false)" @mousedown="right(true)">RIGHT</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      left(go) {
        if (go) {
          this.$socket.emit('chat message', 'l1');
        } else {
          this.$socket.emit('chat message', 'l0');
        }
      },
      right(go) {
        if (go) {
          this.$socket.emit('chat message', 'r1');
        } else {
          this.$socket.emit('chat message', 'r0');
        }
      },
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
