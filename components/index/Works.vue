<template>
  <section id="works">
    <v-container fluid fill-height class="__content">
      <v-row>
        <v-col md="3" class="__content-text">
          <p>Web Page Design</p>
        </v-col>
        <v-col md="3" class="__content-text">
          <p>Web Application</p>
        </v-col>
        <v-col md="3" class="__content-text">
          <p>Desktop Application</p>
        </v-col>
        <v-col md="3" class="__content-text">
          <p>Data Science</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
</script>

<style scoped>
.__content {
  background-color: slateblue;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
}
.__content-text {
  color: white;
  text-align: center;
  font-size: 64px;
  font-weight: bold;
}
</style>