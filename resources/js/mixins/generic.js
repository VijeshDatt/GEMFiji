import dayjs from "dayjs";
export const generic = {
  data() {
    return {
      fieldRules: [v => !!v || 'Field is required',],
      emailRules: [
        v => !!v || 'Email is required',
        v => /[a-zA-Z0-9._-]@[a-zA-Z0-9-]+\.\w+(\.\w+)?/.test(v) || 'Email must be valid',
      ],
      phoneRules: [
        v => !!v || 'Number is required',
        v => /[0-9]{7}/.test(v) || 'Not a valid mobile number',
      ],
      checkRules: [v => !!v || 'You must agree to continue!',],
      arrayRules: [
        v => !!v || 'Field is required',
        v => v && v.length != 0 || 'Field is required',
      ],
      deps: [
        { id: 0, name: 'Administration' },
        { id: 1, name: 'Office Products' },
        { id: 2, name: 'IT Solutions' },
        { id: 3, name: 'Visual Concepts' },
      ],
    };
  },

  methods: {
    fijiTime(value) {
      return dayjs(new Date(value)).format('D-M-YYYY h:mm:ss a');
    },

    message(value, color) {
      this.$emit('message', value, color);
    },
  },
};
