<template>
  <v-app>
    <!-- Header -->
    <Header :visible="visible" @message="message"></Header>
    <!-- End of header -->
    <!-- Main component -->
    <v-main style="overflow-x: hidden" v-scroll="onScroll">
      <transition name="scale-transition" origin="center center">
        <v-btn fixed bottom right fab v-show="visible" color="primary" @click="$vuetify.goTo(0)">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </transition>
      <transition name="slidereverse" mode="out-in">
        <router-view @message="message" :scrollPosition="scrollPosition"></router-view>
      </transition>
    </v-main>
    <!-- End of main component -->
    <!-- Footer -->
    <Footer></Footer>
    <!-- End of Footer -->
    <!-- Snackbar for extra information -->
    <v-snackbar v-model="snackbar" elevation="12" rounded="lg" transition="slide-y-transition" top text outlined :color="color">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red lighten-1" icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <!-- End of snackbar -->
  </v-app>
</template>

<script>
import Header from '../layout/Header';
import Footer from '../layout/Footer';
export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      visible: null,
      snackbar: false,
      text: '',
      color: '',
      title: '',
      scrollPosition: null,
      // routeCheck: false,
    };
  },

  watch: {
    $route(to, from) {
      this.title = to.meta.title;
      // this.routeCheck = new RegExp('/.').test(to.path);
    },
    title() {
      document.title = this.title + ' | GEM (Fiji) Limited';
    },
  },

  methods: {
    onScroll() {
      this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      this.visible = this.scrollPosition > 200;
    },

    message(...args) {
      this.snackbar = false;
      this.$nextTick(function () {
        this.snackbar = true;
        this.text = args[0];
        this.color = `${args[1]}`;
      });
    },
  },

  mounted() {
    this.title = 'Home';
  },
}
</script>

<style>
[v-cloak] {
  display: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Economica", sans-serif;
  font-weight: 400;
}

.v-application {
  font-family: "Inter", sans-serif !important;
  /* font-weight: 300 !important; */
  word-break: normal !important;
}

.bg {
  /* background-image: url("../../assets/images/misc/funky-lines.png"); */
  background-repeat: repeat;
}

label.theme--dark + input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff !important; /* inherit only works in Safari */
  -webkit-text-size-adjust: inherit !important;
}

label.theme--light + input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #000 !important; /* inherit only works in Safari */
  -webkit-text-size-adjust: inherit !important;
}

/* When dark theme, then make keychain icon white */
label.theme--dark + input::-webkit-credentials-auto-fill-button {
  background-color: #fff !important;
}

/* Hide credentials-auto-fill-button in password inputs, only visible on other inputs */
input[type="password"]::-webkit-credentials-auto-fill-button {
  visibility: hidden;
  display: none !important;
  pointer-events: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.slide-enter-active {
  animation: slide-in 150ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 150ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-10px);
    opacity: 0;
  }
}

.slidereverse-enter-active {
  animation: slide-in-reverse 150ms ease-in-out forwards;
}

.slidereverse-leave-active {
  animation: slide-out-reverse 200ms ease-in-out forwards;
}

@keyframes slide-in-reverse {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out-reverse {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(10px);
    opacity: 0;
  }
}

.v-text-field--filled .v-label--active,
.v-text-field--full-width .v-label--active {
  transform: translateY(-10px) scale(0.75) !important;
}
</style>
