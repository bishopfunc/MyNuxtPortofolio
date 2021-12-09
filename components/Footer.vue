<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal lighten-5">
        <strong class="subheading">Get in touch.</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="footer-text">
        {{ new Date().getFullYear() }} — <strong>MyPorfolio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-twitter',
      'mdi-github',
    ],
  })
}
</script>

<style scoped>
.footer-text{
  text-align: center;
  color: white;
}
</style>>
