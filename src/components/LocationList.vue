<template>
  <v-row>
    <v-col
        v-for="(l, n) in locations"
        :key="n"
        cols="12"
        md="3"
        sm="3"
        @click.capture="$emit('onTypeSelect',n)"
    >
      <v-item v-slot:default="{ active, toggle }">
        <v-card
            style="color: #eebb4d"
            :color="active ? 'primary' : ''"
            class="d-flex align-center py-10"
            :class="active ? 'white--text' : ''"
            @click="toggle"
        >
          <v-scroll-y-transition>
            <div v-if="active" class="display-3 flex-grow-1 text-center">
            </div>
          </v-scroll-y-transition>
          <v-col cols="12">
            <div class="text-center white--text mb-2">
              <v-icon size="35" :color="active ? 'white': 'primary'">{{  l.icon }}</v-icon>
            </div>
            <div class="text-center text-uppercase heading">{{ l.title }}</div>
          </v-col>
        </v-card>
      </v-item>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LocationList",
  data () {
    return {
      locations: [
        { title: 'house', icon: 'mdi-home'},
        { title: 'apartment', icon: 'mdi-office-building-outline'},
        { title: 'studio', icon: 'mdi-sofa' },
        { title:'storage', icon: 'mdi-window-shutter' }
      ],
    }
  }
}
</script>

<style scoped>

</style>