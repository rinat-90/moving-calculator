<template>
  <v-col cols="12" md="10" offset-md="1">
    <v-card flat>

      <v-card-title class="text-center">
        <span class="mx-auto">Where are you moving to?</span>
      </v-card-title>
      <v-card-subtitle class="heading text-center">
        We can easily handle all your stuff, but it's helpful to know where we're taking it.
      </v-card-subtitle>
      <v-card-title class="text-center">
        <span class="mx-auto">Choose current location type:</span>
      </v-card-title>

      <v-card-text>
        <v-item-group mandatory>
          <v-container>
            <location-list @onTypeSelect="select" />
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <v-form ref="form">
                      <div v-if="selected === 1 || selected === 2">
                        <v-subheader>Floor</v-subheader>
                        <v-text-field outlined placeholder="Floor" v-model="movingData.floor" :rules="rules.floor"></v-text-field>
                      </div>
                      <div v-if="selected === 1 || selected === 2 || selected === 0">
                        <v-subheader>Square footage</v-subheader>
                        <v-text-field v-model="movingData.sqf" :rules="rules.sqrs" outlined placeholder="Square footage"></v-text-field>
                      </div>
                    </v-form>
                    <v-row>
                      <div v-if="selected === 0">
                        <v-subheader>Stories</v-subheader>
                        <div class="d-flex" style="border: 1px solid #d3d3d3">
                          <div class="pa-3">
                            <v-btn icon @click="dec('strs')">
                              <v-icon>mdi-minus</v-icon>
                            </v-btn>
                          </div>
                          <v-divider vertical></v-divider>
                          <div class="pa-3 px-5">
                            <span class="headline">{{ movingData.stories }}</span>
                          </div>
                          <v-divider vertical></v-divider>
                          <div class="pa-3">
                            <v-btn icon @click="inc('strs')">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </div>
                        </div>
                      </div>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-card-text>


      <v-card-actions>
        <v-btn @click="$store.commit('DEC_STEP')">back</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="validateMovingTo">
          Next: Special Items
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import LocationList from "@/components/LocationList";
export default {
  name: "StepMovingTo",
  components: {
    LocationList
  },
  data () {
    return {
      selected: 0,
      stories: 1,
      rules: {
        floor: [
          v => !!v || 'Floor is required',
        ],
        sqrs: [
          v => !!v || 'Square footage is required',
        ]
      }
    }
  },
  computed: {
    movingData () {
      return this.selected === 0
          ? { type: 'house', stories: this.stories, sqf: '900' } :
          this.selected === 1
              ? { type: 'apartment', floor: '', sqf: '900' } :
              this.selected === 2
                  ? { type: 'studio', floor: '', sqf: '900' }
                  :{  type: 'storage' }
    }
  },
  methods: {
    validateMovingTo () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('setMovingTo', this.movingData)
        console.log(this.movingData)
      }
    },
    select (n) {
      this.selected = n
    },
    inc (type) {
      if (type === 'bdrm') {
        if(this.bedrooms <= 4){
          this.bedrooms++
        }
      } else if (type === 'btrm') {
        if(this.bathrooms <= 3){
          this.bathrooms++
        }
      }else if (type === 'strs') {
        if(this.stories <= 3){
          this.stories++
        }
      }
    },
    dec (type) {
      if (type === 'bdrm') {
        if(this.bedrooms !== 1){
          this.bedrooms--
        }
      } else if (type === 'btrm') {
        if(this.bathrooms !== 1){
          this.bathrooms--
        }
      } else if (type === 'strs') {
        if(this.stories !== 1){
          this.stories--
        }
      }
    }
  }
}
</script>

<style scoped>

</style>