<template>
  <section id="top">
    <v-container fluid fill-height class="__content">
      <v-row>
        <v-col class="__content-text">
          <p>Welcome to my website.</p>
          <p>I'm a enginner.</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.__content {
  background: url("/image/toppage.jpg");
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