<template>
  <b-nav-item @click="skin = isDark ? 'light' : 'dark'">
    <feather-icon
    class="mr-1"
      size="19"
      :icon="`${isDark ? 'Sun' : 'Moon'}Icon`"
    />
    <b v-if="isDark">Light Mode</b>
    <b v-if="!isDark">Dark Mode</b>
  </b-nav-item>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'
import { computed } from '@vue/composition-api'
import { BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNavItem,
  },
  setup() {
    const { skin } = useAppConfig()

    const isDark = computed(() => skin.value === 'dark')

    return { skin, isDark }
  },
}
</script>
