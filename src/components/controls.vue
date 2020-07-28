<template>
  <div id="controlscontainer">
    <strong>Connected: {{connected}}</strong><br><br><br>
    <div class="half">
      <h4>Controls</h4>
      <b-button class="buttons" v-on:click="right()">RIGHT</b-button>
      <b-button class="buttons" v-on:click="left()">LEFT</b-button>
      <b-button class="buttons" v-on:click="stop()">STOP</b-button>
      </div>
      <div class="half">
        <h4>Current Waiting Queue  {{this.currentTimer}}</h4>
        <SimpleQueue :currentQueue="currentQueue" :ownId="ownId" :ownName="clientName"></SimpleQueue>
      </div>
    </div>
</template>

<script>
import SimpleQueue from "./SimpleQueueComponent"

export default {
  components: {
    SimpleQueue
  },
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
},
sockets: {
  connect: function () {
                console.log('socket connected')
                this.connected = true;
                this.ownId = this.$socket.id
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
            update_queue: function (data) {
                this.currentQueue = data;
            },
            queue_ping: function() {
                this.$socket.emit("queue_pong")
            },
            update_timer:function(data) {
                this.currentTimer = data;
            },
            client_name: function(data) {
                this.clientName = data;
            }
        },
        data: function () {
            return {
                connected: false,
                currentQueue: [],
                ownId: "undefined",
                clientName: "undefined",
                currentTimer: 0,
            }
        },
        computed: {
            amIActive: function() {
                if(this.currentQueue.length == 0) return false;
                return this.currentQueue[1][0].id === this.ownId;
            }
        }
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