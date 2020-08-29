<template>
  <v-app>
    <v-main>
      <v-container>
        <stepper />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Stepper from "@/components/Stepper";

export default {
  name: 'App',
  components: {
    Stepper,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  body {
    font-family:'Alata', sans-serif !important;
  }
</style>
