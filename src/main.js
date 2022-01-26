import { createApp, VueElement} from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faTimesCircle,faCrow,faDove} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimesCircle,faCrow,faDove)

createApp(App).component("font-awesome-icon",FontAwesomeIcon).mount('#app')
