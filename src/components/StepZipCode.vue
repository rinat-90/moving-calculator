<template>
  <v-col cols="12" md="10" offset-md="1">
    <v-card flat>
      <v-card-title class="text-center">
        <span class="mx-auto">Get an instant price for your move</span>
      </v-card-title>
      <v-card-subtitle class="heading text-center">
        Enter your ZIP codes and a few home details to get an instant, guaranteed price.
      </v-card-subtitle>
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <v-text-field
              v-model="zips.currentZip"
              :rules="rules.currentZip"
              type="number"
              label="Current zip code">
          </v-text-field>
          <v-text-field
              v-model="zips.newZip"
              :rules="rules.newZip"
              type="number"
              label="New zip code">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark @click="validateZips">
          Next: Moving From
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "StepZipCode",
  data () {
    return {
      valid: false,
      zips: { currentZip: '', newZip: ''},
      rules: {
        currentZip: [
          v => !!v || 'Zip is required',
          v => v.length < 6 || 'Invalid zip code',
        ],
        newZip: [
          v => !!v || 'Zip is required',
          v => v.length < 6 || 'Invalid zip code',
          v => v !== this.zips.currentZip || 'Invalid zip code'
        ]
      }
    }
  },
  computed: {
    submitted () {
      return this.$store.state.submitted
    }
  },
  methods: {
    validateZips () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('setZips', this.zips)
      }
    }
  },
  watch: {
    submitted(val) {
      if (val) {
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped>

</style>