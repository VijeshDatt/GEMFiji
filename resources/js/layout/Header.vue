<template>
  <div>
    <v-app-bar app color="white">
      <v-progress-linear absolute bottom color="primary" :active="loadingBar" indeterminate></v-progress-linear>
      <v-btn icon color="primary" @click="drawer = true" v-if="$vuetify.breakpoint.smAndDown">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title v-if="$vuetify.breakpoint.mdAndUp">
        <v-img :src="require('../../assets/images/logo/gem-fiji-svg.svg')" max-height="50px" max-width="75%" contain @click="$route.name != 'Home' ? $router.push({ name: 'Home' }) : $vuetify.goTo(0)" v-if="logoCheck" style="cursor: pointer;"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn text :to="({ name: 'Home' })" active-class="primary--text" exact>Home</v-btn>
        <!-- <v-divider vertical inset></v-divider> -->
        <v-menu offset-y transition="slide-y-transition" rounded="t-0 b-lg" open-on-hover>
          <template v-slot:activator="{ on: onMenu }">
            <v-btn text active-class="primary--text" v-on="onMenu" @click="$route.name != 'Home' ? $router.push({ name: 'Home' }) : $vuetify.goTo('#subsidiaries')">
              Subsidiaries
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/office-products" active-class="primary--text">
              <v-list-item-content>
                <v-list-item-title>Office Products</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/it-solutions" active-class="primary--text">
              <v-list-item-content>
                <v-list-item-title>I.T. Solutions</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/visual-concepts" active-class="primary--text">
              <v-list-item-content>
                <v-list-item-title>Visual Concepts</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- <v-divider vertical inset></v-divider> -->
        <v-btn text :to="{ name: 'News' }" active-class="primary--text">News</v-btn>
        <!-- <v-divider vertical inset></v-divider> -->
        <v-btn text :to="{ name: 'Careers' }" active-class="primary--text">Careers</v-btn>
        <v-btn text :to="{ name: 'Contact Us' }" active-class="primary--text">Contact Us</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <template v-slot:prepend>
        <div class="pa-6">
          <img :src="require('../../assets/images/logo/gem-fiji-svg.svg')">
        </div>
      </template>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item active-class="primary--text" exact :to="{ name: 'Home' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="primary--text" :to="{ name: 'News' }">
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>News</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="primary--text" :to="{ name: 'Careers' }">
          <v-list-item-icon>
            <v-icon>mdi-account-tie</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Careers</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="primary--text" :to="{ name: 'Contact Us' }">
          <v-list-item-icon>
            <v-icon>mdi-message-question</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Contact Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      loadingBar: false,
    };
  },

  props: {
    visible: { type: Boolean, default: false },
  },

  computed: {
    logoCheck() { return this.$route.name == 'Home' ? this.visible : true; }
  },

  mounted() { },
}
</script>

<style>
</style>
