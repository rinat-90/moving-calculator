<template>
  <v-stepper v-model="currentStep" style="box-shadow: none">
    <v-app-bar app color="accent" height="auto" dark>
      <v-toolbar-title class="text-center mx-auto hidden-sm-and-down">Movers</v-toolbar-title>
      <v-toolbar-title class="text-center mx-auto hidden-md-and-up text-uppercase">{{ currentStep === 7 ? ' Submitted' : steps[currentStep -1] }}</v-toolbar-title>
      <template v-slot:extension style="height: auto">
        <v-stepper-step :complete="currentStep > 1" step="1" color="primary">
          <span style="color: #f6f6f6">Zip Codes</span>
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 2" step="2" color="primary">
          <span style="color: #f6f6f6">Moving From</span>
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 3" step="3" color="primary">
          <span style="color: #f6f6f6">Moving To</span>
         </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 4" step="4" color="primary">
          <span style="color: #f6f6f6">Special Items</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="currentStep > 5" step="5" color="primary">
          <span style="color: #f6f6f6">Choose Date</span>
        </v-stepper-step>
        <v-divider></v-divider>

        <v-stepper-step :complete="currentStep > 6" step="6" color="primary">
          <span style="color: #f6f6f6">Reserve</span>
        </v-stepper-step>
      </template>
    </v-app-bar>

    <v-stepper-items class="mt-15">

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
        <step-choose-date />
      </v-stepper-content>
      <v-stepper-content step="6">
        <step-reserve />
      </v-stepper-content>
      <v-stepper-content step="7">
       <step-confirmation />
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
import StepChooseDate from "@/components/StepChooseDate";
import StepReserve from "@/components/StepReserve";
import StepConfirmation from "@/components/StepConfirmation";
export default {
  name: 'Stepper',
  components: { StepZipCode, StepMovingFrom, StepMovingTo, StepSpecialItems, StepChooseDate, StepReserve, StepConfirmation },
  data () {
    return {
      steps: ['Zip Codes', 'Moving From', 'Moving To', 'Special Items', 'Choose Date', 'Reserve']
    }
  },
  computed: {
    ...mapGetters(['currentStep'])
  },
  mounted () {
  }
}
</script>