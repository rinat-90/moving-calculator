<template>
  <v-card flat>
    <v-card-title class="text-center">
      <span class="mx-auto">Estimated total price for your move</span>
    </v-card-title>
    <div class="display-3 text-center">${{ getPrice }}</div>
    <v-card-subtitle class="heading text-center">Let's professionals handle to heavy part</v-card-subtitle>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" md="10" offset-md="1">
            <v-form ref="form" class="mb-6">
              <v-text-field label="Ful name" v-model="client.fulName" :rules="rules.fulName"></v-text-field>
              <v-text-field label="Email" v-model="client.email" :rules="rules.email"></v-text-field>
              <v-text-field label="Phone" v-model="client.phone" type="tel" hint="ex. 3332223333" :rules="rules.phone"></v-text-field>
              <v-btn block large color="primary" @click="validateSubmit">Submit you move</v-btn>
            </v-form>
            <v-card-title class="text-center">
              <span class="mx-auto">Guaranteed price, no other fees</span>
            </v-card-title>
            <v-card-subtitle class="heading text-center">Because we know exactly what your move needs, we can give a good price.</v-card-subtitle>
            <v-card flat color="primary lighten-5">
              <v-card-text>
                <v-list color="primary lighten-5">
                  <v-list-item-group>
                    <v-list-item v-for="(item, i) in list" :key="i" inactive disabled >
                      <v-list-item-avatar>
                        <v-icon color="green">mdi-check</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="item"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
            <v-list>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in nofees" :key="i" inactive disabled>
                  <v-list-item-avatar>
                    <v-icon color="green">mdi-check</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>

    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: "StepReserve",
  data () {
    return {
      nofees: ['No risk–cancel for free up to 24 hours before the move', 'No pre-payment or deposit needed', 'No overages or other fees, even if it takes longer than expected'],
      client: {
        fulName: '',
        email: '',
        phone: ''
      },
      rules: {
        fulName: [
          v => !!v || 'Floor is required',
        ],
        email: [
          v => !!v || 'Floor is required',
        ],
        phone: [
          v => !!v || 'Floor is required',
          v => v.length === 10 || 'Invalid phone',
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['getPrice']),
    ...mapState(['zips', 'movingFrom', 'movingTo', 'date']),
    list () {
      return this.zips && this.movingFrom && this.movingTo && this.date
        ? [
        `From a ${this.movingFrom.bedrooms} bedrooms ${this.movingFrom.type} in ${this.zips.currentZip} to ${this.zips.newZip}`,
        this.movingFrom.bedrooms > 2 ? `5 movers for 5 hours` : `7 movers for 10 hours`,
        '2 x 26\' Trucks including drivers, fuel, and mileage',
        this.date
      ] : []
    }
  },
  methods: {
    validateSubmit () {
      if (this.$refs.form.validate()){
        this.$store.dispatch('setClientInfo', this.client)
        this.$refs.form.reset()
        console.log(this.client)
      }
    }
  }
}
</script>

<style scoped>

</style>