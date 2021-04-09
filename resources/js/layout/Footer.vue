<template>
  <v-card flat>
    <v-footer padless color="white" app absolute>
      <v-card class="flex" color="transparent" tile>
        <v-card-text class="py-2 text-center">
          <strong>© {{ new Date().getFullYear() }} GEM (Fiji) Limited. All rights reserved.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
