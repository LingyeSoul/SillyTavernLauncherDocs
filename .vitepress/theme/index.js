import DefaultTheme from 'vitepress/theme'
import './custom.css'
import SponsorButton from '../../components/SponsorButton.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('SponsorButton', SponsorButton)
  }
}