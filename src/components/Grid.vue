<template>
    <div class="size" ref="component">
        <slot></slot>
    </div>
</template>
<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
    gap: {
        type: [Number, String],
        default: undefined
    },
    contentGap: {
        type: [Number, String],
        default: undefined
    },
    columnGap: {
        type: [Number, String],
        default: undefined
    },
})

const { contentGap, columnGap, gap } = toRefs(props)

function normalizeUnits(value) {
    if (!value) return '0px'
    else if (typeof value == 'string') return value
    return value + 'px'
}

const _contentGap = computed(() => normalizeUnits(gap.value || contentGap.value))
const _columnGap = computed(() => normalizeUnits(gap.value || columnGap.value)) 

</script>
<style scoped>
.size {
    --content-gap: v-bind(_contentGap);
    --column-gap: v-bind(_columnGap);

    --gr1: calc((100 * var(--vw) - 2 * var(--content-gap)) / 12);
    --gr1-2: calc(.5 * var(--gr1));
    --gr2: calc(2 * var(--gr1) + 1 * var(--column-gap));
    --gr3: calc(3 * var(--gr1) + 2 * var(--column-gap));
    --gr4: calc(4 * var(--gr1) + 3 * var(--column-gap));
    --gr5: calc(5 * var(--gr1) + 4 * var(--column-gap));
    --gr6: calc(6 * var(--gr1) + 5 * var(--column-gap));
    --gr7: calc(7 * var(--gr1) + 6 * var(--column-gap));
    --gr8: calc(8 * var(--gr1) + 7 * var(--column-gap));
    --gr9: calc(9 * var(--gr1) + 8 * var(--column-gap));
    --gr10: calc(10 * var(--gr1) + 9 * var(--column-gap));
    --gr11: calc(11 * var(--gr1) + 10 * var(--column-gap));
    --gr12: calc(12 * var(--gr1) + 11 * var(--column-gap));
    
    --gr12x2: calc(24 * var(--gr1) + 23 * var(--column-gap));
    --gr12x3: calc(36 * var(--gr1) + 35 * var(--column-gap));
    --gr12x4: calc(48 * var(--gr1) + 47 * var(--column-gap));
    --gr12x5: calc(60 * var(--gr1) + 59 * var(--column-gap));

    --gr-1: calc(-1 * var(--gr1));
    --gr-1-2: calc(-1 * var(--gr1-2));
    --gr-2: calc(-1 * var(--gr2));
    --gr-3: calc(-1 * var(--gr3));
    --gr-4: calc(-1 * var(--gr4));
    --gr-5: calc(-1 * var(--gr5));
    --gr-6: calc(-1 * var(--gr6));
    --gr-7: calc(-1 * var(--gr7));
    --gr-8: calc(-1 * var(--gr8));
    --gr-9: calc(-1 * var(--gr9));
    --gr-10: calc(-1 * var(--gr10));
    --gr-11: calc(-1 * var(--gr11));
    --gr-12: calc(-1 * var(--gr12));
}
</style>