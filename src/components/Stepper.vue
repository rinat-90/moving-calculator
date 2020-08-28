<template>
  <v-stepper v-model="currentStep" alt-labels>
    <v-stepper-header>
      <v-stepper-step :complete="currentStep > 1" step="1">Zip Codes</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="currentStep > 2" step="2">Moving From</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="currentStep > 3" step="3">Moving To</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step :complete="currentStep > 4" step="4">Special Items</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="currentStep > 5" step="5">Choose Date</v-stepper-step>
      <v-divider></v-divider>

      <v-stepper-step step="5">Reserve</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items >

      <v-stepper-content step="1">
        <step-zip-code />
      </v-stepper-content>

      <v-stepper-content step="2">
        <step-moving-from />
      </v-stepper-content>

      <v-stepper-content step="3">
        <step-moving-to />
      </v-stepper-content>

      <v-stepper-content step="4">
        <step-special-items />
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
        ></v-card>

        <v-btn
            color="primary"
            @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
        ></v-card>

        <v-btn
            color="primary"
            @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { mapGetters } from 'vuex'
import StepZipCode from "@/components/StepZipCode";
import StepMovingFrom from "@/components/StepMovingFrom";
import StepMovingTo from "@/components/StepMovingTo";
import StepSpecialItems from "@/components/StepSpecialItems";
export default {
  name: 'Stepper',
  components: { StepZipCode, StepMovingFrom, StepMovingTo, StepSpecialItems },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['currentStep'])
  },
  mounted () {
  }
}
</script>