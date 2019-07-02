<template>
  <div id="nav"></div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Nav extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #nav {
    background-color: map_get($colors, "light");
    grid-area: nav;
  }
</style>

<i18n>
  {
    "en": {}
  }
</i18n>
