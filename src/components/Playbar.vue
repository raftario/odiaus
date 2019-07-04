<template>
  <div id="playbar">
    <PlaybarControls/>
  </div>
</template>

<script lang="ts">
  import PlaybarControls from '@/components/PlaybarControls.vue'
  import { Component, Vue } from 'vue-property-decorator'
  @Component({
    components: { PlaybarControls }
  })
  export default class Playbar extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #playbar {
    background-color: map_get($colors, "darker-ll");
    grid-area: playbar;
  }
</style>

<i18n>
  {
    "en": {}
  }
</i18n>
