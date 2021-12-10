<template>
  <div class="hal3">
    <h1>0620104026 - Rizky Bagus Pangestu</h1>
    <v-text-field v-model="namaAwal" label="Nama Awal"></v-text-field>
    <v-text-field v-model="namaAkhir" label="Nama Akhir"></v-text-field>
    <p>{{ namaLengkap }}</p>
    <v-btn @click="clearData()" color="blue" block> Clear </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namaAwal: "",
      namaAkhir: "",
    };
  },
  computed: {
    namaLengkap: function(){
      return this.namaAwal + " " +this.namaAkhir 
    }
  },
  watch: {
    namaAwal: function (newVal) {
      if (newVal === "rizky") {
        this.namaAkhir = "bagus";
      }
    }
  },
  methods: {
    clearData() {
      this.namaAwal = ""
      this.namaAkhir = ""
    },
    abc() {
      this.clearData()
    }
  },
  beforeMount: function () {
    // this.namaAwal = "silahkan masukan nama awal"
  }
}
</script>
