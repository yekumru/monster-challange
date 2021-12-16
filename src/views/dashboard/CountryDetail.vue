<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height mb-2">
      <b-col sm="3">
        <router-link :to="{ name: 'index' }">
          <b-button variant="outline-dark">
            <feather-icon icon="ArrowLeftIcon" class="mr-15" />
            <span class="align-middle">Back</span>
          </b-button>
        </router-link>
      </b-col>
    </b-row>
    <card-detail :data="country" />
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
  BButton,
} from "bootstrap-vue";

import CardDetail from "./component/CardDetail.vue";

export default {
  components: {
    CardDetail,
    BButton,
    BCard,
    BCardText,
    BTabs,
    BTab,
    BRow,
    BCol,
  },
  data() {
    return {
      country: [],
    };
  },
  methods: {
    getCountryDetailByAlphaCode() {
      this.$http
        .get(`https://restcountries.com/v2/alpha/${this.$route.params.id}`)
        .then((response) => {
          this.country = response.data;
          console.log(this.country);
        });
    },
  },
  created() {
    this.getCountryDetailByAlphaCode();
  },
};
</script>