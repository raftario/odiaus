<template>
  <div id="controls">
    <PlaybarControlsShuffle/>
    <PlaybarControlsPrev/>
    <PlaybarControlsPlay/>
    <PlaybarControlsNext/>
    <PlaybarControlsRepeat/>
  </div>
</template>

<script lang="ts">
  import PlaybarControlsNext from '@/components/PlaybarControlsNext.vue'
  import PlaybarControlsPlay from '@/components/PlaybarControlsPlay.vue'
  import PlaybarControlsPrev from '@/components/PlaybarControlsPrev.vue'
  import PlaybarControlsRepeat from '@/components/PlaybarControlsRepeat.vue'
  import PlaybarControlsShuffle from '@/components/PlaybarControlsShuffle.vue'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      PlaybarControlsRepeat,
      PlaybarControlsShuffle,
      PlaybarControlsPrev,
      PlaybarControlsNext,
      PlaybarControlsPlay
    }
  })
  export default class PlaybarControls extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #controls {
    display: flex;
    align-items: center;
    justify-items: center;
    grid-area: controls;
    align-self: center;
  }
</style>

<i18n>
  {
    "en": { }
  }
</i18n>
