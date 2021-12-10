
<template>
    <v-row
    align="center"
    justify="space-around"
  >
    <v-btn 
      text
      @click="$vuetify.goTo('#top')"
    >
      TOP  
    </v-btn>

    <v-btn 
      text
      @click="$vuetify.goTo('#about')"
    >
      ABOUT  
    </v-btn>
    
    <v-btn
      text
      color="primary"
      @click="$vuetify.goTo('#engineering')"
    >
      ENGINEERING
      <!-- SKILLS -->
    </v-btn>

    <v-btn
      text
      color="error"
      @click="$vuetify.goTo('#research')"

    >
      RESEARCH
    </v-btn>

    <v-btn
      text
      color="error"
      @click="$vuetify.goTo('#career')"
    >
      CAREER
    </v-btn>

    <v-btn
      text
      color="error"
      @click="$vuetify.goTo('#community')"
    >
      COMMUNITY
    </v-btn>

    <v-btn
      text
      color="error"
      @click="$vuetify.goTo('#works')"
    >
      WORKS
    </v-btn>

    <v-btn
      text
      color="error"
      @click="$vuetify.goTo('#services')"
    >
      SERVICES
    </v-btn>

    <v-btn
      text
      color="error"
      @click="$vuetify.goTo('#blog')"
    >
      BLOG
    </v-btn>
  </v-row>
</template>

<script>
// export default {
//   data: () => {
//     return {
      // duration: 1000,
      // offset: 0,
      // easing: 'easeInOutCubic',
  //   }
  // },
  // computed: {
  //     target () {
  //       const value = this[this.type]
  //       if (!isNaN(value)) return Number(value)
  //       else return value
  //     },
  //     options () {
  //       return {
  //         duration: this.duration,
  //         offset: this.offset,
  //         easing: this.easing,
  //       }
  //     },
  //     element () {
  //       if (this.selected === 'Button') return this.$refs.button
  //       else if (this.selected === 'Radio group') return this.$refs.radio
  //       else return null
  //     },
  // }
// }
</script>
