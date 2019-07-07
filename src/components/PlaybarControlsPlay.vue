<template>
  <span
    id="play-pause"
    role="button"
    @click="isPlaying = !isPlaying"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="play-pause-svg"
    >
      <path :d="path"/>
    </svg>
  </span>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PlaybarControlsPlay extends Vue {
    public isPlaying: boolean = false

    // tslint:disable:max-line-length
    get path (): string {
      return this.isPlaying
        ? 'M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z'
        : 'M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    }
  }
</script>

<style
  lang="scss"
  scoped
>
  #play-pause {
    @extend %pointer;
    @extend %no-spacing;
  }

  #play-pause:hover {

  }

  #play-pause:active {

  }

  #play-pause-svg {
    height: 3 * $gap;
  }
</style>

<i18n>
  {
    "en": { }
  }
</i18n>
