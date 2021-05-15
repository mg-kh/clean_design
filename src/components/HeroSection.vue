<template>
  <section class="heroSection section-spacer">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <b-row class="swiper__arrow-space align-items-center py-5">
          <b-col cols="12" md="6" class="p-lg-5">
            <article class="hero__text" v-animate-css="'fadeInLeft'">
              <h3 class="m-0">Better software make more clients.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                culpa optio eaque itaque praesentium recusandae facere amet
                maxime dignissimos blanditiis.
              </p>

              <b-button
                v-animate-css.hover="'pulse'"
                class="hero__btn px-4 py-3"
                variant="info"
                size="lg"
                >Get Something</b-button
              >
            </article>
          </b-col>
          <b-col cols="12" md="6" class="p-lg-5">
            <div class="p-3" v-animate-css="'fadeInRight'">
              <img
                class="img-fluid"
                src="../../public/img/utalize/hero-02.svg"
                alt="hero-img"
              />
            </div>
          </b-col>
        </b-row>
      </swiper-slide>

      <swiper-slide>
        <b-row class="swiper__arrow-space align-items-center py-5">
          <b-col cols="12" md="6" class="p-lg-5">
            <article class="hero__text" v-animate-css="'fadeInLeft'">
              <h3 class="m-0">Clean and effective</h3>
              <p>
                Finding amazing website with clean ui. Yeap this is the right
                place.
              </p>

              <b-button
                v-animate-css.hover="'pulse'"
                class="hero__btn px-4 py-3"
                variant="info"
                size="lg"
                >Get Something</b-button
              >
            </article>
          </b-col>
          <b-col cols="12" md="6" class="p-lg-5">
            <div class="p-3" v-animate-css="'fadeInRight'">
              <img
                class="img-fluid"
                src="../../public/img/utalize/hero-01.svg"
                alt="hero-img"
              />
            </div>
          </b-col>
        </b-row>
      </swiper-slide>
      <div
        v-animate-css.hover="'pulse'"
        class="swiper-button-prev"
        slot="button-prev"
      ></div>
      <div
        v-animate-css.hover="'pulse'"
        class="swiper-button-next"
        slot="button-next"
      ></div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "../../node_modules/swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
