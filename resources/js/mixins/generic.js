import dayjs from "dayjs";
export const generic = {
  data() {
    return {
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
    }
  },
};
