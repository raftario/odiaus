<template>
  <div id="appbar"></div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Appbar extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #appbar {
    background-color: map_get($colors, "light-d");
    grid-area: appbar;
  }
</style>

<i18n>
  {
    "en": {}
  }
</i18n>
