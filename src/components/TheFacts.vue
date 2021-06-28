<template>
  <section class="factSection section-spacer" id="fact">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <article class="factSection__title">
            <h3>No stories, facts only</h3>
            <p class="m-0">
              Better software promotes overall sales & net profits
            </p>
          </article>
        </div>

        <div
          class="col-12 col-md-6 col-lg-3"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <div class="card factSection__card">
            <div class="card-body">
              <h4 class="factSection__card__title">Successfully served</h4>
              <p class="factSection__card__count">
                <ICountUp
                  :delay="delay"
                  :endVal="endVal1"
                  :options="options"
                  @ready="ready"
                />
              </p>
              <p class="factSection__card__state text-uppercase">
                HAPPY CLIENTS
              </p>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-md-6 col-lg-3"
          data-aos="zoom-in-up"
          data-aos-delay="600"
        >
          <div class="card factSection__card">
            <div class="card-body">
              <h4 class="factSection__card__title">Successfully completed</h4>
              <p class="factSection__card__count">
                <ICountUp
                  :delay="delay"
                  :endVal="endVal2"
                  :options="options"
                  @ready="ready"
                />
              </p>
              <p class="factSection__card__state text-uppercase">
                BRANDING PROJECTS
              </p>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-md-6 col-lg-3"
          data-aos="zoom-in-up"
          data-aos-delay="900"
        >
          <div class="card factSection__card">
            <div class="card-body">
              <h4 class="factSection__card__title">Recruit more than</h4>
              <p class="factSection__card__count">
                <ICountUp
                  :delay="delay"
                  :endVal="endVal3"
                  :options="options"
                  @ready="ready"
                />
              </p>
              <p class="factSection__card__state text-uppercase">
                PROFESSIONAL EXPERTS
              </p>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-md-6 col-lg-3"
          data-aos="zoom-in-up"
          data-aos-delay="1200"
        >
          <div class="card factSection__card">
            <div class="card-body">
              <h4 class="factSection__card__title">Published widely</h4>
              <p class="factSection__card__count">
                <ICountUp
                  :delay="delay"
                  :endVal="endVal4"
                  :options="options"
                  @ready="ready"
                />
              </p>
              <p class="factSection__card__state text-uppercase">BLOG POSTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from "lodash";
import ICountUp from "vue-countup-v2";
export default {
  name: "demo",
  components: {
    ICountUp,
  },
  data() {
    return {
      delay: 1500,
      endVal1: 1343,
      endVal2: 143,
      endVal3: 1543,
      endVal4: 903,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
      },
    };
  },
  methods: {
    ready: function (instance) {
      // const that = this;
      document.addEventListener(
        "scroll",
        _.throttle(() => {
          var scrollTop = window.scrollY;
          var fact = document.querySelector("#fact");
          var factContainerPos = fact.offsetTop;
          if (
            scrollTop > factContainerPos - 100 &&
            scrollTop < factContainerPos
          ) {
            instance.start();
          } else {
            instance.reset();
            instance.start();
          }
        }, 500)
      );
    },
  },
};
</script>
