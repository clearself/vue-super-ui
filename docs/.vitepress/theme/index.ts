import DefaultTheme from 'vitepress/theme'
import './global.less' 
import VueSuperUI from '../../../dist/vue-super-ui'
import '../../../dist/style.css'

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp ({ app }) {
    app.use(VueSuperUI)
  }
}
