<template>
  <div id="app">
    <Appbar/>
    <Nav/>
    <router-view id="content"/>
    <Playlist/>
    <Playbar/>
  </div>
</template>

<script>
  import Appbar from '@/components/Appbar'
  import Nav from '@/components/Nav'
  import Playbar from '@/components/Playbar'
  import Playlist from '@/components/Playlist'
  import { Component, Vue } from 'vue-property-decorator'

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

<style lang="scss">
  %fullsize {
    width: 100vw;
    height: 100vh;
  }

  html, body {
    @extend %fullsize;

    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    color: map-get($colors, "darker");
    background-color: map-get($colors, "lighter");
  }

  #app {
    @extend %fullsize;

    display: grid;
    grid: [appbar-start] "appbar appbar appbar" map-get($sizes, "appbar-height") [appbar-end]
          [content-start] "nav content playlist" 1fr [content-end]
          [playbar-start] "playbar playbar playbar" map-get($sizes, "playbar-height") [playbar-end]
          / map-get($sizes, "nav-width") auto map-get($sizes, "playlist-width");
  }

  #content {
    grid-area: content;
    padding: $gap;
  }
</style>
