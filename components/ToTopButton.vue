<template>  
  <transition name="fade">
    <v-btn  
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop">
      <v-icon>fas fa-angle-up</v-icon>
    </v-btn>
  </transition>
</template>

<script>
export default {
  data: () => ({ fab: true }),
  
  methods: {
    onScroll () {
      if (typeof window === 'undefined') return
      const top = (
        window.pageYOffset ||
        document.documentElement.offsetTop ||
        0
      )

      console.log("top: " + top);

      this.fab = top > 300
    },
    toTop () {
      console.log("typeof window: " + typeof window);
      console.log("window.pageYOffse: " + window.pageYOffse);
      console.log("document.documentElement.offsetTop: " + document.documentElement.offsetTop);
      if (this.$route.hash) {
        this.$router.push({ hash: '' })
      }

      this.$vuetify.goTo(0)
    },
  },
  // methods: {
  //   onScroll (e){
  //     console.log("typeof window: " + typeof window);
  //     console.log("window.pageYOffse: " + window.pageYOffse);
  //     console.log("e.target.scrollTop: " + e.target.scrollTop);
  //     console.log("top: " + top);
  //     if (typeof window === 'undefined') return
  //     const top = window.pageYOffset ||   e.target.scrollTop || 0
  //     this.fab = top > 500
  //   },
  //   toTop () {
  //     this.$vuetify.goTo(0)
  //     console.log("Click");
  //   }
  // }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: 0.5s;
} 
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>