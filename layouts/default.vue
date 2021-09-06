<template>
  <div class="w-maxwidth">
    <main-header />
    <navbar />
    <nav-mobile />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import MainHeader from '@/components/Header/MainHeader.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import NavMobile from '@/components/Navbar/NavMobile.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  components: { MainHeader, Navbar, NavMobile, Footer },
}
</script>
