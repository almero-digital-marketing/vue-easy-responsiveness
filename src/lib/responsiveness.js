import { ask, registerOnChange } from 'what-input'
import { readonly, reactive, computed} from 'vue'
import Responsiveness from '../components/Responsiveness.vue'

export default { 
    install(app) {
        const mediaQuery = reactive({})
        const mediaUnits = reactive({})

        const mediaList = computed(() => {
            let list = []
            for(let item in mediaQuery) {
                if(mediaQuery[item]) list.push(item)
                else list.push('not-' + item)
            }
            return list
        })
        
        let unitGuard = {
            vw: 0,
            vh: 0
        }
        
        const aspectRatio = () => Math.max(window.innerWidth, window.innerHeight) / Math.min(window.innerWidth, window.innerHeight)
        const initialAspectRation = aspectRatio()
        function respond() {
            mediaQuery.desktop = window.innerWidth > 1380
            mediaQuery.laptop = window.innerWidth <= 1380 && window.innerWidth > 1024
            mediaQuery.tablet = window.innerWidth <= 1024 && window.innerWidth > 640
            mediaQuery.phone = window.innerWidth <= 640
            mediaQuery.pc = mediaQuery.desktop || mediaQuery.laptop
            mediaQuery.mobile = mediaQuery.tablet || mediaQuery.phone
            mediaQuery.mini = window.innerWidth < 360
            
            mediaQuery.cinema = initialAspectRation >= 19 / 10
            mediaQuery.wide = initialAspectRation >= 16 / 10 && initialAspectRation < 19 / 10
            mediaQuery.monitor = initialAspectRation < 16 / 10

            if (aspectRatio() >= 4 / 3) {
                mediaQuery.portrait = window.innerHeight > window.innerWidth
                mediaQuery.landscape = window.innerHeight < window.innerWidth
            }

            mediaQuery.window = {
                width: window.innerWidth,
                widthHalf: window.innerWidth / 2,
                widthThird: window.innerWidth / 3,
                widthQuater: window.innerWidth / 4,
                widthFifth: window.innerWidth / 5,
                height: window.innerHeight,
                heightHalf: window.innerHeight / 2,
                heightThird: window.innerHeight / 3,
                heightQuater: window.innerHeight / 4,
                heightFifth: window.innerHeight / 5,
            }


            let currentUnitGuard = {
                vw: mediaQuery.desktop ? (window.innerWidth / 100) : (screen.availWidth / 100),
                vh: mediaQuery.desktop ? (window.innerHeight / 100) : (screen.availHeight / 100)
            }
            if (mediaQuery.desktop || 
                Math.abs(currentUnitGuard.vw - unitGuard.vw) / currentUnitGuard.vw > .1 || 
                Math.abs(currentUnitGuard.vh - unitGuard.vh) / currentUnitGuard.vh > .1) {
                console.log('Recalculating units:', unitGuard, currentUnitGuard)
                unitGuard = currentUnitGuard

                mediaUnits['--vw'] = unitGuard.vw + 'px'
                mediaUnits['--vh'] = unitGuard.vh + 'px'

            }
        }
        respond()

        function whatIntent() {
            const intent = ask('intent')
            mediaQuery.mouse = intent == 'mouse'
            mediaQuery.touch = intent == 'touch'
        }
        whatIntent()

        registerOnChange(whatIntent, 'intent')
        window.addEventListener('resize', respond)

        app.provide('mediaList', mediaList) 
        app.provide('mediaQuery', readonly(mediaQuery))
        app.provide('mediaUnits', readonly(mediaUnits))

        Object.defineProperty(app.config.globalProperties, '$mediaQuery', readonly(mediaQuery))

        app.component('responsiveness', Responsiveness)
    }
}