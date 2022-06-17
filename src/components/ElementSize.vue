<template>
    <div 
        :class="name+ '-size'" 
        ref="component"
        :style="{
            ['--' + name + '-width']: width + 'px',
            ['--' + name + '-height']: height + 'px'
        }"
    >
        <slot></slot>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = defineProps({
    name: {
        type: String,
        default: 'element'
    }, 
})

const component = ref(null)
const { width, height } = useElementSize(component)

</script>