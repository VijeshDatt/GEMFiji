<template>
  <div>
    <v-container>
      <v-card flat>
        <v-card-title class="d-flex justify-center">
          <h1>Contact Us</h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <h2 class="text-center">Have a question or require a quote? Do not hesitate to send us a message via the form below</h2>
        </v-card-text>
        <v-card-text class="justify-center">
          <v-container :style="[$vuetify.breakpoint.mdAndDown ? {'width': '100%'} : {'width': '60%'}]">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row justify="center" align="center">
                <v-col md="4"></v-col>
                <v-col cols="12" md="4">
                  <!-- <v-text-field v-model="form.category" filled label="Choose a category"></v-text-field> -->
                  <v-select v-model="form.category" :items="categoryItems" label="Choose a category" item-text="text" item-value="value" :menu-props="menuProps" :rules="fieldRules" filled clearable></v-select>
                </v-col>
                <v-col md="4"></v-col>
                <v-expand-transition>
                  <div v-show="form.category">
                    <v-row justify="center" align="center" dense>
                      <v-col cols="12" md="4">
                        <v-text-field v-model="form.full_name" label="Full Name*" :rules="fieldRules" filled counter="255" maxlength="255"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field v-model="form.mobile_number" label="Mobile Number*" :rules="phoneRules" v-mask="'#######'" filled counter="7"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-text-field v-model="form.email_address" label="Email Address*" :rules="emailRules" filled counter="255" maxlengt="255"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="form.address" label="Address" :rules="fieldRules" filled counter="255" maxlength="255"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field v-model="form.subject" label="Subject*" :rules="fieldRules" filled counter="255" maxlength="255"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea filled label="Message*" auto-grow :rules="fieldRules" counter="1000" maxlength="1000"></v-textarea>
                      </v-col>
                      <v-col cols="6">
                        <p class="my-0"><strong>Fields denoted with * are compulsory.</strong></p>
                      </v-col>
                      <v-col cols="6" class="d-flex justify-end">
                        <v-btn class="primary" large rounded @click="send" :disabled="!valid">
                          Send <v-icon right>mdi-send</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      form: {},
      categoryItems: [
        { header: 'General' },
        { divider: true, inset: true },
        { text: 'Office Products', value: 'officeproducts@gem.com.fj' },
        { text: 'Visual Concepts', value: 'frontdesk.vc@gem.com.fj' },
        { text: 'Administration', value: 'accounts@gem.com.fj' },
        { divider: true },
        { header: 'IT Solutions' },
        { divider: true, inset: true },
        { text: 'IT Sales', value: 'salesadmin.it@gem.com.fj' },
        { text: 'Technical Support', value: 'helpdesk@gem.com.fj' },
        { text: 'Infrastructure Solutions', value: 'infra-solutions@gem.com.fj' },
        { text: 'Networking & Structured Cabling', value: 'nst@gem.com.fj' },
      ],
      menuProps: {
        transition: 'slide-y-transition',
        offsetY: true,
      },
    };
  },

  watch: {
    'form.category'(newValue, oldValue) {
      if (newValue && newValue != oldValue) {
        this.$refs.form.resetValidation();
      }
    }
  },

  methods: {
    send() {
      if (this.$refs.form.validate()) {
        this.message('Form Valid', 'success');
      } else {
        this.message('Form Invalid', 'error');
      }
    }
  },
}
</script>

<style>
</style>
