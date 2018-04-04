# vue-avatar-editor

Facebook like, avatar / profile picture component. This is Vue.js clone of <a href="https://github.com/mosch/react-avatar-editor">mosch/react-avatar-editor</a>

Resize, rotate and crop your uploaded image using a clear user interface.

Demo at <a href="https://fpluquet.github.io/vue-avatar-editor/">https://fpluquet.github.io/vue-avatar-editor/</a>

# Usage

```html
<div id="app">
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
    <br>
    <img src="" ref="image">
    <button v-on:click="saveClicked">Click</button>
</div>
```

```javascript
import Vue from 'vue'
import VueAvatar from './components/VueAvatar.vue'
import VueAvatarScale from './components/VueAvatarScale.vue'

let vm = new Vue({
  el: '#app',
  components: {
    VueAvatar,
    VueAvatarScale
  },
  data () {
      return {
          rotation: 0,
          scale: 1
      };
  },
  methods: {
      saveClicked () {
          var img = this.$refs.vueavatar.getImageScaled()
          this.$refs.image.src = img.toDataURL()
      },
      onImageReady () {
          console.log('here')
          this.scale = 1
          this.rotation = 0
      }
  }
})
```

## Props
| Prop                   | Type     | Description
| ---------------------- | -------- | ---------------
| width                  | Number   | The total width of the editor
| height                 | Number   | The total width of the editor
| border                 | Number   | The cropping border. Image will be visible through the border, but cut off in the resulting image.
| color                  | Number[] | The color of the cropping border, in the form: [red (0-255), green (0-255), blue (0-255), alpha (0.0-1.0)]
| style                  | Object   | Styles for the canvas element
| scale                  | Number   | The scale of the image. You can use this to add your own resizing slider.
| rotation               | Number   | The rotation in degrees of the image. You can use this to add your own rotating slider.

## Accessing the resulting image

```javascript
this.$refs.vueavatar.getImage()
```


The resulting image will have the same resolution as the original image, regardless of the editor's size.
If you want the image sized in the dimensions of the canvas you can use `getImageScaled`.


```javascript
this.$refs.vueavatar.getImageScaled()
```


# Contributing

For development you can use following build tools:

* `npm run build`: Builds the *minified* dist file: `dist/index.js`
* `npm run dev`: Watches for file changes and builds *unminified* into: `dist/index.js`
localhost:8080)