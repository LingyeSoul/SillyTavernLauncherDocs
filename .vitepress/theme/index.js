import DefaultTheme from 'vitepress/theme'
import './custom.css'
import SponsorButton from '../../components/SponsorButton.vue'
import CopyButton from '../../components/CopyButton.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('SponsorButton', SponsorButton)
    app.component('CopyButton', CopyButton)
  }
}