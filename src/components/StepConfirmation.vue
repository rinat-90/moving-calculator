<template>
  <v-card flat>
    <v-card-title class="text-center">
      <span class="mx-auto">Your move has been submitted successfully</span>
    </v-card-title>
    <v-card-subtitle class="heading text-center">
      Please, check your inbox for confirmation and the other details.
    </v-card-subtitle>
    <v-card-text></v-card-text>
    <v-card-actions class="text-center">
      <v-col cols="12">
        <img style="height: 150px; width: 150px" src="../assets/trucks2.svg" />
        <div class="heading my-2">You all set</div>
        <v-icon color="green">mdi-check</v-icon>
        <v-btn text @click="$store.commit('RESET')">Return back</v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "StepConfirmation"
}
</script>

<style scoped>

</style>