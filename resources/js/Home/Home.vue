<template>
  <div>
    <v-container>
      <v-card flat>
        <v-sheet>
          <div style="margin-top: -8% !important;" v-if="$vuetify.breakpoint.lgAndUp" class="my-auto">
            <h2 class="text-center fixed-position-text">Welcome to</h2>
            <v-img :src="require('../../assets/images/logo/gem-fiji-svg.svg')" alt="GEM (Fiji) Logo" class="fixed-position-image"></v-img>
            <v-img :src="require('../../assets/images/home-jumbo.svg')" class="fixed-position-jumbo"></v-img>
          </div>
        </v-sheet>
        <v-divider></v-divider>
        <v-card-title class="d-flex justify-center" id="aboutus">
          <h1>About Us</h1>
        </v-card-title>
        <v-card-text>
          <p class="text-justify">
            GEM (Fiji) Limited, formerly called Graphics Equipments Limited was established in 1972 with a vision of reaching out to customers and providing business solutions. We are a unique family business providing business solutions for organizations to be more efficient, improve performance and provide better results. We work with organizations in every industry in the public and private sectors and of every size from start-ups to multinationals.
          </p>
          <p class="text-justify">
            GEM IT SOLUTIONS is the ONLY PLATINUM PARTNER of DELL in Fiji with Authorized Service Centre here to cater to all warranty and service needs, making sure our clients get the best after-sales services.
          </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-title class="d-flex justify-center" id="subsidiaries">
          <h1>Subsidiaries</h1>
        </v-card-title>
        <v-card-text>
          <v-row align="center">
            <v-col cols="12" md="6" class="text-md-end text-center">
              <h1 class="py-4">GEM Office Products</h1>
              <p class="text-justify">GEM Office Products is a customer focused business solutions company with the prime objective of providing each of our customers with an unparalleled level of service, coupled with the most competitive prices in the industry. In order to differentiate ourselves from our competitors, we have taken positive steps to ensure that all our customers are treated with equal care, from large corporate accounts through to small office / home office customers.</p>
            </v-col>
            <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img :src="require('../../assets/images/home-op.svg')" contain></v-img>
            </v-col>
            <v-col cols="12" md="6" v-if="$vuetify.breakpoint.mdAndUp">
              <v-img :src="require('../../assets/images/home-it.svg')" contain></v-img>
            </v-col>
            <v-col cols="12" md="6" class="text-md-start text-center">
              <h1 class="py-4">GEM IT Solutions</h1>
              <p class="text-justify">GEM IT Solutions is the IT arm of GEM (Fiji) Limited. GEM IT Solutions primary objective is to help our customers achieve their business goals with the application of pertinent technology solutions. Our business model combines industry leading technology accreditations, diligent account managers, supported by a large team of experienced technical consultants and engineers. Our success has come from providing our clients with unrivalled technical expertise along with extremely high service levels.</p>
              <p class="text-justify">GEM IT Technical Engineers have a wealth of experience in solution design and deployment, and have the confidence in technology required to deliver integrated solutions that meet your business demands. With our comprehensive portfolio of leading technology partners, our in-house Dell-certified expert team of technical resource are here to meet your day-to-day business challenges.</p>
            </v-col>
            <v-col cols="12" md="6" class="text-md-end text-center">
              <h1 class="py-4">GEM Visual Concepts</h1>
              <p class="text-justify">GEM Visual Concepts understand that the success of a company depends in part to creating visibility in the market place. We are a fully-fledged design, marketing and print production setup. Our products and services include design concepts, wide format printing, promotional displays, sign boards, desktop publishing, promotional products and I.D. card printing and related accessories. Our team strives to develop creative concepts that accurately capture our clients’ communication and marketing requirements. We value simplicity and emphasize on friendly and personal service. Let us enhance your business with outstanding visual and communication concepts.</p>
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
  margin-left: 25%;
  margin-top: 5rem;
  font-size: 3.5em;
  z-index: 1;
}

.fixed-position-image {
  position: absolute;
  margin-left: 25%;
  margin-top: 10rem;
  font-size: 3.5em;
  width: 250px;
  z-index: 1;
}

.fixed-position-jumbo {
  margin-left: 25%;
  margin-top: 10rem;
  font-size: 3.5em;
  width: 60vw;
}
</style>
