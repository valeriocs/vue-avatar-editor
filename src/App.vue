<template>
  <div id="app">
    <h1>hello</h1>
    <vue-avatar
      :width=400
      :height=400
      :rotation="rotation"
      :scale="scale"
      ref="vueavatar"
      @vue-avatar-editor:image-ready="onImageReady"
      >
    </vue-avatar>
    <br>
    <vue-avatar-scale
      ref="vueavatarscale"
      :width=250
      :min=1
      :max=3
      :step=0.02
      :value.sync='scale'
      >
    </vue-avatar-scale>
    <vue-avatar-scale
      ref="vueavatarrotate"
      :width=250
      :min=0
      :max=360
      :step=1
      :value.sync='rotation'
      >
    </vue-avatar-scale>
    <br>
    <img src="" ref="image">
    <button v-on:click="saveClicked">Click</button>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                rotation: 0,
                scale: 1
            };
        },
        methods: {
            saveClicked () {
                var img = this.$refs.vueavatar.getImageScaled();
                this.$refs.image.src = img.toDataURL();
            },
            onImageReady () {
                console.log('here');
                this.scale = 1;
                this.rotation = 0;
            }
        }
    };
  </script>

<style>
#app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
  </style>
