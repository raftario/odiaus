<template>
  <span
    id="skip-next"
    role="button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="skip-next-svg"
    >
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
    </svg>
  </span>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PlaybarControlsNext extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #skip-next {
    @extend %pointer;
    @extend %no-spacing;
  }

  #skip-next:hover {

  }

  #skip-next:active {

  }

  #skip-next-svg {
    height: 2 * $gap;
  }
</style>

<i18n>
  {
    "en": { }
  }
</i18n>
