<template>
  <section class="siteProperty section-spacer pt-0">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="siteProperty__section-detail">
            <h3>In-depth Sales Reports Available at Your Hand</h3>
            <p>
              If you are planning on developing a product landing app or
              website,
            </p>
          </div>
        </div>
      </div>

      <b-row class="align-items-center m-0">
        <b-col cols="12" lg="6">
          <div class="p-5">
            <img
              class="img-fluid"
              src="../../public/img/utalize/site-property.svg"
              alt="hero-img"
            />
          </div>
        </b-col>
        <b-col cols="12" lg="6">
          <b-card
            no-body
            class="overflow-hidden border-0 p-3 propertyCard"
            style="max-width: 540px"
            v-animate-css.hover="'pulse'"
            data-aos="zoom-in-up"
          >
            <b-row no-gutters>
              <b-col>
                <b-card-img
                  :src="require('../../public/img/utalize/property-01.png')"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="9">
                <b-card-body title="Horizontal Card">
                  <b-card-text class="propertyCard__text">
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>

          <b-card
            no-body
            class="overflow-hidden border-0 p-3 propertyCard"
            style="max-width: 540px"
            v-animate-css.hover="'pulse'"
            data-aos="zoom-in-up"
          >
            <b-row no-gutters>
              <b-col>
                <b-card-img
                  :src="require('../../public/img/utalize/property-02.png')"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="9">
                <b-card-body title="Horizontal Card">
                  <b-card-text class="propertyCard__text">
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>

          <b-card
            no-body
            class="overflow-hidden border-0 p-3 propertyCard"
            style="max-width: 540px"
            v-animate-css.hover="'pulse'"
            data-aos="zoom-in-up"
          >
            <b-row no-gutters>
              <b-col>
                <b-card-img
                  :src="require('../../public/img/utalize/property-03.png')"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="9">
                <b-card-body title="Horizontal Card">
                  <b-card-text class="propertyCard__text">
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </section>
</template>
