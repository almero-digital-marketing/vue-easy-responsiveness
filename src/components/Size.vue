<template>
    <div class="size" ref="component">
        <slot></slot>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const component = ref(null)
const { width, height } = useElementSize(component)

</script>
<style scoped>
.size {
    --element-width: calc(v-bind(width) * 1px);
    --element-height: calc(v-bind(height) * 1px);

    --ew: calc(var(--element-width) / 100);
    --eh: calc(var(--element-height) / 100);
}
</style>