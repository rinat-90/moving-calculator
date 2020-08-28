<template>
  <v-card flat>
    <v-card-title class="text-center">
      <span class="mx-auto">Do you have anything that requires special care?</span>
    </v-card-title>
    <v-card-subtitle class="heading text-center">
      This helps us be prepared on your move day.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="$store.commit('DEC_STEP')">back</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary">
        Next: Choose Date
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "StepSpecialItems",
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>