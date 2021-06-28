<template>
  <div class="container-fluid px-0" v-scroll-spy>
    <hero-section></hero-section>
    <site-property></site-property>
    <verticle-tab></verticle-tab>
    <div>
      <the-facts></the-facts>
      <the-feedback></the-feedback>
    </div>
    <the-wave></the-wave>
    <the-price></the-price>
    <the-footer></the-footer>
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection";
import SiteProperty from "@/components/SiteProperty";
import VerticleTab from "@/components/VerticleTab";
import TheFacts from "@/components/TheFacts";
import TheWave from "@/components/TheWave";
import ThePrice from "@/components/ThePrice";
import TheFooter from "@/components/TheFooter";
import TheFeedback from "@/components/TheFeedback";

export default {
  name: "Home",
  components: {
    HeroSection,
    SiteProperty,
    VerticleTab,
    TheFacts,
    TheWave,
    ThePrice,
    TheFooter,
    TheFeedback,
  },
  metaInfo: {
    title: "Clean Design",
    // override the parent template and just use the above title only
    titleTemplate: null,
  },
};
</script>
