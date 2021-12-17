<template>
  <v-form ref="form">
    <v-text-field
      v-model="newActivityTitle"
      name="newActivityTitle"
      data-vv-as="Activity"
      color="cyan"
      label="What to do?"
      @keydown.enter.prevent="add"
      ref="field"
      append-outer-icon="send"
      @click:append-outer="add"
    />
  </v-form>
</template>

<script>

export default {
  name: 'AddActivityField',
  data () {
    return {
      newActivityTitle: '',
    }
  },
  methods: {
    add () {
        this.$store.dispatch('add', this.newActivityTitle.trim())
        this.newActivityTitle = ''
        this.$refs.field.blur()
        this.$validator.reset()
        this.$refs.form.reset()
    },
  }
}
</script>
