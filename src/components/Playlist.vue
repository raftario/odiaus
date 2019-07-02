<template>
  <div id="playlist"></div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Playlist extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #playlist {
    background-color: map_get($colors, "light");
    grid-area: playlist;
  }
</style>

<i18n>
  {
    "en": {}
  }
</i18n>
