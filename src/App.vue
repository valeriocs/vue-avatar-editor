<template>
  <div id="app">
    <h1>hello</h1>
    <vue-avatar
      :width=400
      :height=400
      ref="vueavatar"
      @vue-avatar-editor:image-ready="onImageReady"
      >
    </vue-avatar>
    <br>
    <vue-avatar-scale
      ref="vueavatarscale"
      @vue-avatar-editor-scale:change-scale="onChangeScale"
      :width=250
      :min=1
      :max=3
      :step=0.02
      >
    </vue-avatar-scale>
    <vue-avatar-scale
      ref="vueavatarrotate"
      @vue-avatar-editor-scale:change-scale="onChangeRotate"
      :width=250
      :min=0
      :max=360
      :step=1
      >
    </vue-avatar-scale>
    <br>
    <img src="" id="img-1">
    <button v-on:click="saveClicked">Click</button>
  </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            onChangeScale (scale) {
                this.$refs.vueavatar.changeScale(scale);
            },
            onChangeRotate (scale) {
                this.$refs.vueavatar.changeRotation(scale);
            },
            saveClicked () {
                var img = this.$refs.vueavatar.getImageScaled();
                document.getElementById('img-1').src = img.toDataURL();
            },
            onImageReady (scale) {
                this.$refs.vueavatarscale.setScale(scale);
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
