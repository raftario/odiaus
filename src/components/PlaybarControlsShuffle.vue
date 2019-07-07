<template>
  <span
    id="shuffle"
    role="button"
    @click="isShuffle = !isShuffle"
    :class="{ 'active': isShuffle }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="shuffle-svg"
    >
      <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
    </svg>
  </span>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PlaybarControlsShuffle extends Vue {
    public isShuffle: boolean = false
  }
</script>

<style
  lang="scss"
  scoped
>
  #shuffle.active {

  }

  #shuffle {
    @extend %pointer;
    @extend %no-spacing;

    margin-right: $gap;
  }

  #shuffle:hover {

  }

  #shuffle:active {

  }

  #shuffle-svg {
    height: $gap;
  }
</style>

<i18n>
  {
    "en": { }
  }
</i18n>
