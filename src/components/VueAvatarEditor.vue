<template>
  <div>
    <vue-avatar
      :width=400
      :height=400
      ref="vueavatar"
      @vue-avatar-editor:image-ready="onImageReady">
    </vue-avatar>
    <vue-avatar-scale
      ref="vueavatarscale"
      @vue-avatar-editor-scale:change-scale="onChangeScale"
      :width=250
      :min=1
      :max=3
      :step=0.02>
    </vue-avatar-scale>
    <button @click="finished">{{ finishText }}</button>
  </div>
</template>

<script>

import VueAvatar from './VueAvatar.vue'
import VueAvatarScale from './VueAvatarScale.vue'

export default {
    components: {
        VueAvatar,
        VueAvatarScale
    },
    props: {
        finishText: {
            type: String,
            required: true
        },
        finishCallback: {
            type: Function,
            required: true
        }
    },
    methods: {
        onChangeScale (scale) {
            this.$refs.vueavatar.changeScale(scale);
        },
        onImageReady (scale) {
            this.$refs.vueavatarscale.setScale(scale);
        },
        finished () {
            return this.finishCallback(this.$refs.vueavatar.getImageScaled());
        }
    }
}

</script>
