<template>
  <div>
    <v-container>
      <v-card flat>
        <v-sheet>
          <div style="margin-top: -8% !important;" v-if="$vuetify.breakpoint.mdAndUp">
            <h2 class="text-center fixed-position-text">Welcome to</h2>
            <v-img :src="require('../../assets/images/logo/gem-fiji-svg.svg')" alt="GEM (Fiji) Logo" class="fixed-position-image" contain></v-img>
            <v-img :src="require('../../assets/images/home-jumbo.svg')" class="fixed-position-jumbo"></v-img>
          </div>
          <v-row v-else>
            <v-col cols="12">
              <h2 class="text-center">Welcome to</h2>
            </v-col>
            <v-col cols="12">
              <v-img :src="require('../../assets/images/logo/gem-fiji-svg.svg')" alt="GEM (Fiji) Logo" width="150" style="margin-left: 32%" contain></v-img>
            </v-col>
          </v-row>
        </v-sheet>
        <v-divider></v-divider>
        <v-card-title class="d-flex justify-center" id="aboutus">
          <h1>About Us</h1>
        </v-card-title>
        <v-card-text>
          <p class="text-justify black--text">
            We are a unique family business providing business solutions for organizations to be more efficient, improve performance and provide better results. We work with organizations in every industry in the public and private sectors and of every size from startups to multinationals.
          </p>
          <p class="text-justify black--text">
            GEM (Fiji) Limited formerly called Graphics Equipments Limited was established in 1972 with a vision of reaching out to customers and providing business solutions
          </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title class="d-flex justify-center" id="subsidiaries">
          <h1>Subsidiaries</h1>
        </v-card-title>
        <v-card-text>
          <v-row align="center">
            <v-col cols="12" md="6" class="text-end">
              <h1>GEM Office Products</h1>
              <p>Supplies quality office furniture, equipment, stationery and educational products.</p>
            </v-col>
            <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img :src="require('../../assets/images/home-op.svg')" contain></v-img>
            </v-col>
            <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img :src="require('../../assets/images/home-it.svg')" contain></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <h2>GEM IT Solutions</h2>
              <p>Providing IT hardware, software, services, consulting, training, implementation services.</p>
            </v-col>
            <v-col cols="12" md="6" class="text-end">
              <h2>GEM Visual Concepts</h2>
              <p>Creating innovative design concepts and producing finished signage, promotional and printed items.</p>
            </v-col>
            <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img :src="require('../../assets/images/home-vc.svg')" contain></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  watch: {},

  methods: {},

  mounted() { },
}
</script>

<style>
.fixed-position-text {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20%;
  margin-top: 10rem;
  font-size: 3.5em;
  z-index: 1;
}

.fixed-position-image {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 20%;
  margin-top: 15rem;
  font-size: 3.5em;
  z-index: 1;
}

.fixed-position-jumbo {
  top: 0;
  right: 0;
  margin-left: 20%;
  margin-top: 10rem;
  font-size: 3.5em;
  width: 70vw;
}
</style>
