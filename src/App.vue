<template>
  <div id="app">
    <Appbar class="dp04"/>
    <Nav class="dp03"/>
    <router-view id="content"/>
    <Playlist class="dp03"/>
    <Playbar class="dp08"/>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import Appbar from './components/Appbar'
  import Nav from './components/Nav'
  import Playbar from './components/Playbar'
  import Playlist from './components/Playlist'

  @Component({
    components: {
      Appbar,
      Nav,
      Playbar,
      Playlist
    }
  })

  export default class App extends Vue {}
</script>

<style
  lang="scss"
  scoped
>
  #app {
    @extend %fullsize;

    display: grid;
    grid: [appbar-start] "appbar appbar appbar" #{3 * $gap} [appbar-end]
          [content-start] "nav content playlist" 1fr [content-end]
          [playbar-start] "playbar playbar playbar" #{4 * $gap} [playbar-end]
          / #{8 * $gap} auto #{8 * $gap};
  }

  #content {
    grid-area: content;

    padding: $margin;

    @include sm {
      padding: $margin;
    }

    @include md {
      padding: $margin;
    }

    @include lg {
      padding: $margin;
    }

    @include xl {
      padding: $margin;
    }
  }
</style>
