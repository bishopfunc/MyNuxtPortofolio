<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      fixed
      color="teal lighten-3"
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <h3>MyPortfolio</h3>

      <v-spacer></v-spacer>
        <NavButton />
      <v-spacer></v-spacer>

      
      <ToggleLang />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 50px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import NavButton from '@/components/NavButton'
import ToggleLang from '@/components/ToggleLang'

export default {
  components: {
    NavButton,
    ToggleLang,
  }
}
</script>

