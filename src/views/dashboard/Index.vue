<template>
  <section id="dashboard-ecommerce">
    <b-row
      class="match-height mb-2 d-flex justify-content-between aling-item-center"
    >
      <b-col sm="12" xl="3">
        <b-form-input
          v-model="search"
          @keyup.enter="searchInput"
          placeholder="Search for a country..."
          class="mt-1"
        />
      </b-col>
      <b-col sm="12" xl="3">
        <b-form-select
          v-model="selected"
          :options="options"
          size="md"
          class="mt-1"
          v-on="selectRegion(selected)"
        />
      </b-col>
    </b-row>
    <card-images :data="allCountry" />
  </section>
</template>

<script>
import {
  BRow,
  BCol,
  BTabs,
  BTab,
  BCard,
  BCardText,
  BFormSelect,
  BFormInput,
} from "bootstrap-vue";

import CardImages from "./component/CardImages.vue";

export default {
  components: {
    CardImages,
    BFormInput,
    BCard,
    BCardText,
    BFormSelect,
    BTabs,
    BTab,
    BRow,
    BCol,
  },
  data() {
    return {
      allCountry: [],
      selected: null,
      searchContry: [],
      search: "",
      options: [
        { value: null, text: "Please select an option" },
        { value: "africa", text: "Africa" },
        { value: "americas", text: "America" },
        { value: "asia", text: "Asia" },
        { value: "europe", text: "Europe" },
        { value: "oceania", text: "Oceania" },
      ],
    };
  },
  created() {
    this.$http.get("https://restcountries.com/v2/all").then((response) => {
      this.allCountry = response.data;
    });
  },
  methods: {
    selectRegion(selected) {
      if (selected !== null) {
        this.$http
          .get(`https://restcountries.com/v2/region/${selected}`)
          .then((response) => {
            this.allCountry = response.data;
            this.selected = null;
          });
      }
    },
  },
  mounted() {
    this.selectRegion();
  },
  computed: {
    searchInput() {
      return this.allCountry.filter((post) => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>