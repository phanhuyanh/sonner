import { toast } from './toast.js'

export default {
  install(app, options) {
    app.mixin({
      created() {
        this.$toast = toast
      }
    })
  }
}
