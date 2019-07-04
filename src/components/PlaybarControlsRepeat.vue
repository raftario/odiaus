<template>
  <span
    id="repeat"
    role="button"
    @click="isRepeat = (isRepeat + 1) % 3"
    :class="{ 'active': isRepeat !== 0 }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="repeat-svg"
    >
      <path :d="path"/>
    </svg>
  </span>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class PlaybarControlsRepeat extends Vue {
    public isRepeat: number = 0

    get path (): string {
      return this.isRepeat !== 2
        ? 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z'
        : 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z'
    }
  }
</script>

<style
  lang="scss"
  scoped
>
  #repeat.active {
    fill: map-get($colors, "primary-l");
  }

  #repeat {
    @extend %pointer;
    @extend %no-spacing;

    fill: map-get($colors, "lighter");
    margin-left: $gap;
  }

  #repeat:hover {
    fill: map-get($colors, "primary");
  }

  #repeat:active {
    fill: map-get($colors, "primary-d");
  }

  #repeat-svg {
    height: map-get($sizes, "playbar-height") / 3;
  }
</style>

<i18n>
  {
    "en": {}
  }
</i18n>
