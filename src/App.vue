<template>
  <div id="app">
   <section class="section">
    <h1 class="title">File Uploader</h1>
    <file-uploader />
    <file-viewer />
  </section>

  </div>
</template>

<script>
import FileUploader from "./components/FileUploader.vue";
import FileViewer from "./components/FileViewer.vue";

export default {
  name: 'App',
  components: {
   FileUploader,
   FileViewer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
