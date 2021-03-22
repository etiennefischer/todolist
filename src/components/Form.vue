<template>
  <form @submit.prevent="submit">
    <input
      ref="nameInput"
      class="w-full p-2 border border-purple-100 rounded-sm hover:bg-purple-100 focus:bg-purple-100 focus:ring ring-offset-purple-700 focus:outline-none"
      type="text"
      placeholder="Nouvelle tâche…"
      v-model="name">
    <Button
      class="w-full mx-auto mt-4"
      type="submit">
      Nouvelle tâche
    </Button>
    <div
      v-if="hasError"
      class="px-4 py-2 mt-4 text-red-700 bg-red-100 rounded">
      Essaye pas de me rouler mon gars 😏
    </div>
  </form>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    Button
  },
  data() {
    return {
      name: '',
      hasError: false
    }
  },
  methods: {
    submit() {
      this.hasError = false
      if (this.name !== '') {
        this.$store.dispatch('addItem', this.name)
        this.name = ''
      }
      else {
        this.hasError = true
      }
    }
  },
  mounted() {
    this.$refs.nameInput.focus()
  }
}
</script>
