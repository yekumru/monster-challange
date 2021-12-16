<template>
  <ul id="main-menu-navigation" class="nav navbar-nav">
    <component
      :is="resolveNavComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
    />
    <li class="nav-item">
          <date-range-picker v-model="pickerDates">
      <template
        v-slot:input="picker"
        style="min-width: 350px;"
      >{{ pickerDates.startDate | date }} - {{ pickerDates.endDate | date }}</template>
    </date-range-picker>
    </li>
  </ul>
</template>

<script>
import HorizontalNavMenuHeaderLink from "../horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue";
import HorizontalNavMenuHeaderGroup from "../horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue";
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  components: {
    HorizontalNavMenuHeaderLink,
    HorizontalNavMenuHeaderGroup,
    DateRangePicker,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 6);

    return {
      pickerDates: {
        startDate,
        endDate
      }
    };
  },
   filters: {
    date(date) {
      return new Intl.DateTimeFormat("en-US").format(date);
    }
  },
  setup() {
    const resolveNavComponent = (item) => {
      if (item.children) return "horizontal-nav-menu-header-group";
      return "horizontal-nav-menu-header-link";
    };

    return {
      resolveNavComponent,
    };
  },
};
</script>
