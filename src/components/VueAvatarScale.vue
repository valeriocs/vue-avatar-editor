<template>
  <input
    :value="value"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    @input="sendValue"
    :style="{ width:width +'px'}"
    />
</template>

<script>
    export default{
        props: {
            width: {
                type: Number,
                default: 200
            },
            min: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                default: 2
            },
            step: {
                type: Number,
                default: 0.01
            },
            value: {
                type: Number,
                default: 0
            }
        },
        methods: {
            sendValue ($event) {
                this.$emit('update:value', parseFloat($event.target.value));
            }
        }
    };
</script>
