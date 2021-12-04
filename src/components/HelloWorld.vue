<template>
  <v-container>
    <p>{{ text }}</p>
    <v-btn block @click="ubahTeks()">Block Button</v-btn>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      text: "Hello",
    }),

    methods: {
      ubahTeks() {
        this.text = "0620104026 Rizky Bagus Pangestu"
      }
    },
    compoted: {},
    watch: {},
    beforeMount() {
      this.text = "welcome rizky bagus"
    }
  }
</script>
