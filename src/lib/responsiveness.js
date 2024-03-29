import { ask, registerOnChange } from 'what-input'
import { readonly, reactive } from 'vue'

export default { 
    install(app, options = {}) {
        const mediaQuery = reactive({})
        const mediaUnits = reactive({})
        const mediaList = reactive([])
       
        let unitGuard = {
            vw: 0,
            vh: 0
        }
        
        function updateClasses() {
            mediaList.length = 0
            for(let item in mediaQuery) {
                if(mediaQuery[item]) mediaList.push(item)
                else mediaList.push('not-' + item)
            }
        }

        const aspectRatio = () => Math.max(window.innerWidth, window.innerHeight) / Math.min(window.innerWidth, window.innerHeight)
        const initialAspectRation = aspectRatio()
        function respond() {
            mediaQuery.desktop = window.innerWidth > (options.desktop || 1380)
            mediaQuery.laptop = window.innerWidth <= (options.desktop || 1380) && window.innerWidth > (options.laptop || 1024)
            mediaQuery.tablet = window.innerWidth <= (options.laptop || 1024) && window.innerWidth > (options.phone || 640)
            mediaQuery.phone = window.innerWidth <= (options.phone || 640)
            mediaQuery.mini = window.innerWidth < (options.mini || 360)

            mediaQuery.pc = mediaQuery.desktop || mediaQuery.laptop
            mediaQuery.mobile = mediaQuery.tablet || mediaQuery.phone
            
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
                vw: mediaQuery.desktop ? (document.body.clientWidth / 100) : (window.screen.availWidth / 100),
                vh: mediaQuery.desktop ? (document.body.clientHeight / 100) : (window.screen.availHeight / 100)
            }
            console.log(window.innerWidth, document.body.clientWidth)
            if (mediaQuery.desktop || 
                Math.abs(currentUnitGuard.vw - unitGuard.vw) / currentUnitGuard.vw > .1 || 
                Math.abs(currentUnitGuard.vh - unitGuard.vh) / currentUnitGuard.vh > .1) {
                console.log('Recalculating units:', unitGuard, currentUnitGuard)
                unitGuard = currentUnitGuard

                mediaUnits.vw = unitGuard.vw + 'px'
                mediaUnits.vh = unitGuard.vh + 'px'

            }

            updateClasses()
        }
        respond()

        function whatIntent() {
            const intent = ask('intent')
            mediaQuery.mouse = intent == 'mouse'
            mediaQuery.touch = intent == 'touch'
            
            updateClasses()
        }
        whatIntent()

        registerOnChange(whatIntent, 'intent')
        window.addEventListener('resize', respond)

        app.provide('mediaList', readonly(mediaList)) 
        app.provide('mediaUnits', readonly(mediaUnits))
        app.provide('mediaQuery', readonly(mediaQuery))

        app.config.globalProperties.$mediaQuery = readonly(mediaQuery)
    }
}