import DefaultTheme from 'vitepress/theme'
import DateShifter from '../components/DateShifter.vue'
import D from '../components/D.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DateShifter', DateShifter)
    app.component('D', D)
  }
}
