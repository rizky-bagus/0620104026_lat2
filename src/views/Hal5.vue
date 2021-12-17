<template>
    <div class="hal5">
        <v-container>
            <h1>Latihan Vuex</h1>
        </v-container>
        
        <v-app>
            <ActivitiesList />
        </v-app>
        
    </div>
</template>

<script>
import ActivitiesList from '../components/ActivitiesList'

export default {
  name: 'App',
  components: {
    ActivitiesList
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
