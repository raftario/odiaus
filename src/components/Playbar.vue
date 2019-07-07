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
    grid-area: playbar;
    display: grid;
    grid: [timeline-start] "timeline" $gap [timeline-end]
          [controls-start] "nav content playlist" 1fr [controls-end]
          / auto;
  }
</style>

<i18n>
  {
    "en": {}
  }
</i18n>
