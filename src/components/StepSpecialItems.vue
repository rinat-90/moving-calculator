<template>
  <v-col cols="12" md="10" offset-md="1">
    <v-card flat>
      <v-card-title class="text-center">
        <span class="mx-auto">Do you have anything that requires special care?</span>
      </v-card-title>
      <v-card-subtitle class="heading text-center">
        This helps us be prepared on your move day.
      </v-card-subtitle>
      <v-card-text>
        <v-checkbox v-for="(item,i) in items" :key="i" v-model="selected" color="primary" :label="item" :value="item"></v-checkbox>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$store.commit('DEC_STEP')">back</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="validateSpecialItems">
          Next: Choose Date
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "StepSpecialItems",
  data () {
    return {
      items: ['Large Safe', 'Piano', 'Large appliance', 'Antique & art', 'Specialized bed', 'Exercise machine', 'Large tool', '40+ inch TV', 'Large Mirror', '10+ seat table'],
      selected: []
    }
  },
  computed: {
    submitted () {
      return this.$store.state.submitted
    }
  },
  methods: {
    validateSpecialItems () {
      this.$store.dispatch('setSpecialItems', this.selected)
    }
  },
  watch: {
    submitted (val) {
      if (val){
        this.selected = []
      }
    }
  }
}
</script>

<style scoped>

</style>