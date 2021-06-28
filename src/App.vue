<template>
  <div id="app">
    <the-navbar></the-navbar>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
let rootPath = "https://clean-design.netlify.app";
export default {
  data() {
    return {
      logo: rootPath + require("./assets/images/coffee_cup.png"),
    };
  },
  components: {
    TheNavbar,
  },
  metaInfo() {
    return {
      meta: [
        // Facebook OpenGraph
        { property: "og:title", content: "Vue static web design" },
        { property: "og:site_name", content: "Clean Design" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: this.logo },
        {
          property: "og:description",
          content: "Transform coffee into ideas!",
        },
      ],
    };
  },
};
</script>
