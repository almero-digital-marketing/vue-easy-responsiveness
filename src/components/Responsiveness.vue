<template>
    <div class="responsiveness" :class="mediaList" :style="mediaUnits">
        <slot></slot>
    </div>
</template>
<script setup>
import { inject } from 'vue'

const mediaList = inject('mediaList')
const mediaUnits = inject('mediaUnits')
</script>
<style lang="css">
@media (orientation: landscape) {
    .responsiveness {
        --vh: 1vh !important;
    }
}
@media (orientation: portrait) {
    .responsiveness {    
        --vw: 1vw !important;
    }
}
.responsiveness {
    --vh300: calc(300 * var(--vh));
    --vh250: calc(250 * var(--vh));
    --vh200: calc(200 * var(--vh));
    --vh195: calc(195 * var(--vh));
    --vh190: calc(190 * var(--vh));
    --vh185: calc(185 * var(--vh));
    --vh180: calc(180 * var(--vh));
    --vh175: calc(175 * var(--vh));
    --vh170: calc(170 * var(--vh));
    --vh165: calc(165 * var(--vh));
    --vh160: calc(160 * var(--vh));
    --vh155: calc(155 * var(--vh));
    --vh150: calc(150 * var(--vh));
    --vh145: calc(145 * var(--vh));
    --vh140: calc(140 * var(--vh));
    --vh135: calc(135 * var(--vh));
    --vh130: calc(130 * var(--vh));
    --vh125: calc(125 * var(--vh));
    --vh120: calc(120 * var(--vh));
    --vh115: calc(115 * var(--vh));
    --vh110: calc(110 * var(--vh));
    --vh105: calc(105 * var(--vh));
    --vh100-1-3: calc(100/3 * var(--vh));
    --vh100-2-3: calc(2 * 100/3 * var(--vh));
    --vh100: calc(100 * var(--vh));
    --vh95: calc(95 * var(--vh));
    --vh90: calc(90 * var(--vh));
    --vh85: calc(85 * var(--vh));
    --vh80: calc(80 * var(--vh));
    --vh75: calc(75 * var(--vh));
    --vh70: calc(70 * var(--vh));
    --vh65: calc(65 * var(--vh));
    --vh60: calc(60 * var(--vh));
    --vh55: calc(55 * var(--vh));
    --vh50: calc(50 * var(--vh));
    --vh45: calc(45 * var(--vh));
    --vh40: calc(40 * var(--vh));
    --vh35: calc(35 * var(--vh));
    --vh30: calc(30 * var(--vh));
    --vh25: calc(25 * var(--vh));
    --vh20: calc(20 * var(--vh));
    --vh15: calc(15 * var(--vh));
    --vh10: calc(10 * var(--vh));
    --vh5: calc(5 * var(--vh));

    --vh-300: calc(-300 * var(--vh));
    --vh-250: calc(-250 * var(--vh));
    --vh-200: calc(-200 * var(--vh));
    --vh-195: calc(-195 * var(--vh));
    --vh-190: calc(-190 * var(--vh));
    --vh-185: calc(-185 * var(--vh));
    --vh-180: calc(-180 * var(--vh));
    --vh-175: calc(-175 * var(--vh));
    --vh-170: calc(-170 * var(--vh));
    --vh-165: calc(-165 * var(--vh));
    --vh-160: calc(-160 * var(--vh));
    --vh-155: calc(-155 * var(--vh));
    --vh-150: calc(-150 * var(--vh));
    --vh-145: calc(-145 * var(--vh));
    --vh-140: calc(-140 * var(--vh));
    --vh-135: calc(-135 * var(--vh));
    --vh-130: calc(-130 * var(--vh));
    --vh-125: calc(-125 * var(--vh));
    --vh-120: calc(-120 * var(--vh));
    --vh-115: calc(-115 * var(--vh));
    --vh-110: calc(-110 * var(--vh));
    --vh-105: calc(-105 * var(--vh));
    --vh-100-1-3: calc(-100/3 * var(--vh));
    --vh-100-2-3: calc(-2 * 100/3 * var(--vh));
    --vh-100: calc(-100 * var(--vh));
    --vh-95: calc(-95 * var(--vh));
    --vh-90: calc(-90 * var(--vh));
    --vh-85: calc(-85 * var(--vh));
    --vh-80: calc(-80 * var(--vh));
    --vh-75: calc(-75 * var(--vh));
    --vh-70: calc(-70 * var(--vh));
    --vh-65: calc(-65 * var(--vh));
    --vh-60: calc(-60 * var(--vh));
    --vh-55: calc(-55 * var(--vh));
    --vh-50: calc(-50 * var(--vh));
    --vh-45: calc(-45 * var(--vh));
    --vh-40: calc(-40 * var(--vh));
    --vh-35: calc(-35 * var(--vh));
    --vh-30: calc(-30 * var(--vh));
    --vh-25: calc(-25 * var(--vh));
    --vh-20: calc(-20 * var(--vh));
    --vh-15: calc(-15 * var(--vh));
    --vh-10: calc(-10 * var(--vh));
    --vh-5: calc(-5 * var(--vh));
}
</style>