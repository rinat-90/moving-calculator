<template>
  <v-col cols="12" md="10" offset-md="1">
    <v-card flat>
      <v-card-title class="text-center">
        <span class="mx-auto">What date works best for you?</span>
      </v-card-title>
      <v-card-subtitle class="heading text-center">
        We'll check to make sure we have the best people available on that day.
      </v-card-subtitle>
      <v-card-text>
        <v-row justify="center">
          <v-date-picker
              v-model="picker"
              :min="picker" width="100%">
          </v-date-picker>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$store.commit('DEC_STEP')">back</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="validateDate">
          Next: Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "StepChooseDate",
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    validateDate () {
      this.$store.dispatch('setDate', this.picker)
    }
  }
}
</script>

<style scoped>

</style>