<template>
  <div id="app">
    <h1>Vue-Avatar-Editor Example</h1>
    <h2> With basic component : Vue-Avatar </h2>
    <vue-avatar
      :width=400
      :height=400
      :rotation="rotation"
      :borderRadius="borderRadius"
      :scale="scale"
      ref="vueavatar"
      @vue-avatar-editor:image-ready="onImageReady"
      >
    </vue-avatar>
    <br>
    <label>
      Zoom : {{scale}}x
      <br>
      <input
        type="range"
        min=1
        max=3
        step=0.02
        v-model='scale'
      />
    </label>
    <br>
    <label>
      Rotation : {{rotation}}°
      <br>
      <input
        type="range"
        min=0
        max=360
        step=1
        v-model='rotation'
      />
    </label>
    <br>
    <label>
      Radius : {{borderRadius}}px
      <br>
      <input
        type="range"
        min=0
        max=200
        step=1
        v-model='borderRadius'
      />
    </label>
    <br>
    <button v-on:click="saveClicked">Get image</button>
    <br>
    <img src="" ref="image">

    <h2> With integrated component : Vue-Avatar-Editor </h2>
    <vue-avatar-editor 
      @finished="saveClickedFromEditor"
      :width=400
      :height=400
      >
    </vue-avatar-editor>
    <img src="" ref="imageFromEditor">
  </div>
</template>

<script>
import VueAvatar from './components/VueAvatar';
import VueAvatarEditor from './components/VueAvatarEditor';

export default {
    name: 'app',
    components: {
        VueAvatar,
        VueAvatarEditor
    },
    data () {
        return {
            rotation: 0,
            scale: 1,
            borderRadius: 0
        };
    },
    methods: {
        saveClicked () {
            var img = this.$refs.vueavatar.getImageScaled();
            this.$refs.image.src = img.toDataURL();
        },
        onImageReady () {
            this.scale = 1;
            this.rotation = 0;
        },
        saveClickedFromEditor (img) {
            this.$refs.imageFromEditor.src = img.toDataURL();
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
