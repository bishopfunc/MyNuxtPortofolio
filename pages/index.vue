<template>
  <v-app>
    <v-main>
      <!-- <v-container>
        <v-layout wrap justify-center>
          <v-flex xs12 sm6 md4>コンテンツ</v-flex>
          <v-flex xs12 sm6 md4>コンテンツ</v-flex>
          <v-flex xs12 sm6 md4>コンテンツ</v-flex>
        </v-layout>
      </v-container> -->
      <Top />
      <About />
      <Engineering />
      <Research />
      <Career />
      <Community />
      <Works />
      <Services />
      <Blog, />
      <!-- <v-container>  -->
        <!-- fluidを付けることで左右いっぱいにコンテナが広がります -->
        <!-- fill-heightを付けるとここに書いた要素は上下中央寄せで表示されます -->
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
import Top from '@/components/index/Top.vue'
import About from '@/components/index/About.vue'
import Engineering from '@/components/index/Engineering.vue'
import Research from '@/components/index/Research.vue'
import Career from '@/components/index/Career.vue'
import Community from '@/components/index/Community.vue'
import Works from '@/components/index/Works.vue'
import Services from '@/components/index/Services.vue'
import Blog from '@/components/index/Blog.vue'
// import ToTopButton from '@/components/ToTopButton'


export default {
  components: {
    Top,
    About,
    Engineering,
    Research,
    Career,
    Community,
    Works,
    Services,
    Blog,
    // ToTopButton,
  }
}
</script>
