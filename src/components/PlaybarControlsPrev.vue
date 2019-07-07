<template>
  <span
    id="skip-prev"
    role="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="skip-prev-svg"
    >
      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
    </svg>
  </span>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PlaybarControlsPrev extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #skip-prev {
    @extend %pointer;
    @extend %no-spacing;
  }

  #skip-prev:hover {

  }

  #skip-prev:active {

  }

  #skip-prev-svg {
    height: 2 * $gap;
  }
</style>

<i18n>
  {
    "en": { }
  }
</i18n>
