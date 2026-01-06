<script setup lang="ts">
import About from './components/About.vue'
import ComingSoon from './components/ComingSoon.vue';
import Control from './components/Control.vue';
import DartFeature from './components/DartFeature.vue';
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import NavBar from './components/NavBar.vue'
import OpenFeature from './components/OpenFeature.vue';
import Plans from './components/Plans.vue';
import Why from './components/Why.vue';
</script>

<template>
  <NavBar />
  <Hero />
  <About />
  <OpenFeature/>
  <Control/>
  <DartFeature/>
  <ComingSoon/>
  <Plans/>
  <Why/>
  <Footer />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Jost', sans-serif;
  /* overflow-x: hidden */
}
</style>
