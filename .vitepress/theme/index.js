import DefaultTheme from 'vitepress/theme'
import './custom.css'
import SponsorButton from '../../components/SponsorButton.vue'
import MeituanButton from '../../components/MeituanButton.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('SponsorButton', SponsorButton)
    app.component('MeituanButton', MeituanButton)
  }
}