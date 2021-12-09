<template>
  <div>
    <Header />
    <Nuxt />
    
    <ToTopButton />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ToTopButton from '@/components/ToTopButton'


export default {
  components: {
    Header,
    Footer,
    ToTopButton,
  }
}
</script>