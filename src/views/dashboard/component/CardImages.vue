<template>
  <section id="card-images">
    <b-row v-if="data" class="match-height">
      <!-- image top -->
      <b-col
        md="6"
        xl="3"
        v-for="(items, index) in data"
        :key="index"
        class="match-height"
      >
        <b-card :img-src="items.flag" img-top class="mb-3">
          <router-link :to="{ name: 'country', params: { id: items.alpha2Code } }">
            <b-card-title class="ml-1 font-large-1">{{
              items.name
            }}</b-card-title>
          </router-link>
          <b-card-text class="ml-1">
            <b class="font-medium-1">Population</b> :
            <small>{{ items.population }}</small>
          </b-card-text>
          <b-card-text class="ml-1">
            <b class="font-medium-1">Region</b> :
            <small>{{ items.region }}</small>
          </b-card-text>
          <b-card-text class="ml-1">
            <b class="font-medium-1">Capital</b> :
            <small>{{ items.capital }}</small>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BLink, BRow, BCol, BCard, BCardText, BCardTitle } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BLink,
    BCol,
    BCard,
    BCardText,
    BCardTitle,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
