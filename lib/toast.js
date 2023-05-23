import { createApp } from 'vue'
import Toast from './Toast.vue'

let mount = false, instance

const toast = (message) => {
  console.log(message, 'message')

  if(!mount) {
    mount = true

    const div = document.createElement('div')
    div.id = 'sonner__toast'

    document.documentElement.appendChild(div)
    instance = createApp(Toast).mount('#sonner__toast')
  }

  instance.list.push({ name: message })
  console.log(instance.list, 'list')
}

export { toast }
