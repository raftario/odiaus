<template>
  <div id="playbar"></div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Playbar extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #playbar {
    background-color: map_get($colors, "darker");
    grid-area: playbar;
  }
</style>

<i18n>
  {
    "en": {}
  }
</i18n>
