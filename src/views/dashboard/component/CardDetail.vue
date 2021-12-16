<template>
  <section id="card-images">
    <b-row class="d-flex justify-content-between aling-item-center mt-5">
      <!-- image top -->
      <b-col sm="6">
        <b-img :src="data.flag" fluid alt="Country image" />
      </b-col>
      <b-col class="" sm="12" md="5" xl="5">
        <h1 class="pt-2">{{ data.name }}</h1>
        <b-row class="d-flex justify-content-between aling-item-center mt-2">
          <b-col class="mb-5" sm="12" md="6" xl="6">
            <h6>
              <b>Native Name </b>: <small>{{ data.nativeName }}</small>
            </h6>
            <h6>
              <b>Population </b>: <small>{{ data.population }}</small>
            </h6>
            <h6>
              <b>Region </b>: <small>{{ data.region }}</small>
            </h6>
            <h6>
              <b>Sub Region </b>: <small>{{ data.subregion }}</small>
            </h6>
            <h6>
              <b>Capital</b>: <small>{{ data.capital }}</small>
            </h6>
          </b-col>
          <b-col sm="12" md="6" xl="6">
            <h6>
              <b>Top Level Domain </b>:
              <small>{{ data.topLevelDomain[0] }}</small>
            </h6>
            <h6>
              <b>Currencies </b>: <small>{{ data.currencies[0].code }}</small>
            </h6>
            <h6>
              <b>Languages </b>:
              <small v-for="(lang, index) in data.languages" :key="index">
                {{ lang.name }},
              </small>
            </h6>
          </b-col>
        </b-row>
        <b-row class="d-flex justify-content-between aling-item-center mt-2">
          <b-col class="" sm="12">
            <h6>
              <b>Border Countries </b>:
              <small v-for="(borders, index) in data.borders" :key="index">
                <b-badge class=" ml-1 mr-1 mt-1" variant="light-secondary"> {{ borders }} </b-badge>
              </small>
            </h6></b-col
          >
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol, BImg, BCardText, BCardTitle, BBadge  } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BImg,
    BCardText,
    BCardTitle,
    BBadge 
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
