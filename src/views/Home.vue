<template>
  <b-container fluid class="p-0">
    <hero-section></hero-section>
    <site-property></site-property>
    <verticle-tab></verticle-tab>
    <the-facts></the-facts>
    <the-wave></the-wave>
    <the-price></the-price>
  </b-container>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import SiteProperty from "@/components/SiteProperty";
import VerticleTab from "@/components/VerticleTab";
import TheFacts from "@/components/TheFacts";
import TheWave from "@/components/TheWave";
import ThePrice from "@/components/ThePrice";
export default {
  name: "Home",
  components: {
    HeroSection,
    SiteProperty,
    VerticleTab,
    TheFacts,
    TheWave,
    ThePrice,
  },
};
</script>
