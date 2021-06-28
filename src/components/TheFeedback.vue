<template>
  <div class="row m-0 feedbackSection section-spacer pt-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <article class="feedbackSection__title position-relative">
            <div class="heart__wrapper">
              <lottie-animation
                path="./img/heart.json"
                :speed="1"
                :width="250"
              ></lottie-animation>
            </div>

            <h3>Clients Review</h3>
            <p class="m-0">See what people are saying...</p>
          </article>
        </div>

        <div class="col-12">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <div class="feedback-card__wrapper">
                <div class="row d-flex align-items-center">
                  <!-- customer photo -->
                  <div
                    class="col-12 col-md-6 pr-md-5 mb-5 mb-md-0 d-flex justify-content-md-end justify-content-center"
                  >
                    <div class="card rounded-circle photo__card">
                      <div class="card-body text-center p-0 border-0">
                        <img
                          class="card-img rounded-circle"
                          src="https://i.pravatar.cc/300?img=38"
                          alt="avatar"
                        />
                        <article class="customer-name">
                          <p class="m-0">Fannie Reynolds</p>
                        </article>
                      </div>
                    </div>
                  </div>

                  <!-- customer review -->
                  <div class="col-12 col-md-6 pl-md-5 mt-3 mt-md-0">
                    <div class="review__wrapper">
                      <article class="px-4 px-md-0">
                        <p class="review m-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt, delectus eveniet maxime nobis corrupti vel
                          minima voluptas ducimus aliquid officia culpa
                          necessitatibus eius tempore. Repudiandae suscipit
                          eaque reiciendis fugiat excepturi.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="feedback-card__wrapper">
                <div class="row d-flex align-items-center">
                  <!-- customer photo -->
                  <div
                    class="col-12 col-md-6 pr-md-5 mb-5 mb-md-0 d-flex justify-content-md-end justify-content-center"
                  >
                    <div class="card rounded-circle photo__card">
                      <div class="card-body text-center p-0 border-0">
                        <img
                          class="card-img rounded-circle"
                          src="https://i.pravatar.cc/300?img=31"
                          alt="avatar"
                        />
                        <article class="customer-name">
                          <p class="m-0">Lillie Nash</p>
                        </article>
                      </div>
                    </div>
                  </div>

                  <!-- customer review -->
                  <div class="col-12 col-md-6 pl-md-5 mt-3 mt-md-0">
                    <div class="review__wrapper">
                      <article class="px-4 px-md-0">
                        <p class="review m-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt, delectus eveniet maxime nobis corrupti vel
                          minima voluptas ducimus aliquid officia culpa
                          necessitatibus eius tempore. Repudiandae suscipit
                          eaque reiciendis fugiat excepturi.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="feedback-card__wrapper">
                <div class="row d-flex align-items-center">
                  <!-- customer photo -->
                  <div
                    class="col-12 col-md-6 pr-md-5 mb-5 mb-md-0 d-flex justify-content-md-end justify-content-center"
                  >
                    <div class="card rounded-circle photo__card">
                      <div class="card-body text-center p-0 border-0">
                        <img
                          class="card-img rounded-circle"
                          src="https://i.pravatar.cc/300?img=5"
                          alt="avatar"
                        />
                        <article class="customer-name">
                          <p class="m-0">Julie Love</p>
                        </article>
                      </div>
                    </div>
                  </div>

                  <!-- customer review -->
                  <div class="col-12 col-md-6 pl-md-5 mt-3 mt-md-0">
                    <div class="review__wrapper">
                      <article class="px-4 px-md-0">
                        <p class="review m-0">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sunt, delectus eveniet maxime nobis corrupti vel
                          minima voluptas ducimus aliquid officia culpa
                          necessitatibus eius tempore. Repudiandae suscipit
                          eaque reiciendis fugiat excepturi.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
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
    LottieAnimation,
    Swiper,
    SwiperSlide,
  },
};
</script>
