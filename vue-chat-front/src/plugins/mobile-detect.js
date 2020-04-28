import MobileDetect from 'mobile-detect'

function install(Vue) {

    

    Vue.prototype.$isMobile = function () {

        const md = new MobileDetect()

        console.log(md)

        return md.phone()

    }

}

export default install