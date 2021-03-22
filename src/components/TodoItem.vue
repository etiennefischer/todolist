<template>
  <div class="flex items-baseline">
    <label
      class="flex items-baseline w-full px-5 py-2 cursor-pointer hover:bg-purple-100"
      :for="`checkbox_${item.id}`">
      <input
        type="checkbox"
        class="mr-2"
        :id="`checkbox_${item.id}`"
        :checked="isChecked"
        @input="onItemChecked(item)">
      <div>
        <h3
          class="font-bold"
          :class="contextualClasses">
          {{item.name}}
        </h3>
        <p class="text-xs">{{formattedDate}}</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return new Intl.DateTimeFormat('fr-FR')
        .format(this.item.createdAt)
    },
    isChecked() {
      return this.item.checkedAt !== null
    },
    contextualClasses() {
      return {
        'line-through': this.isChecked,
        'text-gray-500': this.isChecked
      }
    }
  },
  methods: {
    onItemChecked(item) {
      this.$emit('onItemChecked', item)
    }
  }
}
</script>
