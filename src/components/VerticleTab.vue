<template>
  <section class="verticleTab section-spacer">
    <div class="container">
      <div class="row p-0">
        <div class="col-12 col-lg-4">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div
              class="card mb-3 bg-transparent border-0 nav-link active"
              id="setting_link"
              style="max-width: 540px"
              v-animate-css.click="'bounceIn'"
              @click="activeTab('setting')"
            >
              <div class="row no-gutters">
                <div class="col-2">
                  <img
                    src="../../public/img/utalize/cogs.svg"
                    alt="Img"
                    class="verticleTab__thumb__img"
                  />
                </div>
                <div class="col-9">
                  <h5 class="card-title m-0 verticleTab__thumb__title">
                    Lorem, ipsum dolor.
                  </h5>
                </div>
                <div class="col-12">
                  <p class="m-0 verticleTab__thumb__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet, suscipit.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card mb-3 bg-transparent border-0 nav-link"
              id="dashboard_link"
              style="max-width: 540px"
              v-animate-css.click="'bounceIn'"
              @click="activeTab('dashboard')"
            >
              <div class="row no-gutters">
                <div class="col-2">
                  <img
                    src="../../public/img/utalize/dashoard.svg"
                    alt="Img"
                    class="verticleTab__thumb__img"
                  />
                </div>
                <div class="col-9">
                  <h5 class="card-title verticleTab__thumb__title">
                    Lorem, ipsum dolor.
                  </h5>
                </div>
                <div class="col-12">
                  <p class="m-0 verticleTab__thumb__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet, suscipit.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="card mb-3 bg-transparent border-0 nav-link"
              id="rock_link"
              style="max-width: 540px"
              v-animate-css.click="'bounceIn'"
              @click="activeTab('rock')"
            >
              <div class="row no-gutters">
                <div class="col-2">
                  <img
                    src="../../public/img/utalize/rocket.svg"
                    alt="Img"
                    class="verticleTab__thumb__img"
                  />
                </div>
                <div class="col-9">
                  <h5 class="card-title verticleTab__thumb__title">
                    Lorem, ipsum dolor.
                  </h5>
                </div>
                <div class="col-12">
                  <p class="m-0 verticleTab__thumb__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Amet, suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show text-center active"
              v-animate-css="'fadeIn'"
              id="setting"
              role="tabpanel"
            >
              <img
                class="rounded-lg img-fluid"
                src="../../public/img/utalize/ver-tab-01.jpg"
                alt="img"
              />
            </div>
            <div
              class="tab-pane fade show text-center"
              v-animate-css="'fadeIn'"
              id="dashboard"
              role="tabpanel"
            >
              <img
                class="rounded-lg img-fluid"
                src="../../public/img/utalize/ver-tab-02.jpg"
                alt="img"
              />
            </div>
            <div
              class="tab-pane fade show text-center"
              v-animate-css="'fadeIn'"
              id="rock"
              role="tabpanel"
            >
              <img
                class="rounded-lg img-fluid"
                src="../../public/img/utalize/ver-tab-03.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    activeTab(val) {
      const tabPhoto = document.querySelector(`#${val}`);
      const allTabPhoto = document.querySelectorAll(".tab-pane");
      const allLink = document.querySelectorAll(".nav-link");
      const currentLink = document.querySelector(`#${val}_link`);

      allLink.forEach((link) => {
        link.classList.remove("active");
      });

      allTabPhoto.forEach((tab) => {
        tab.classList.remove("active");
      });

      currentLink.classList.add("active");
      tabPhoto.classList.add("active");
    },
  },
};
</script>
