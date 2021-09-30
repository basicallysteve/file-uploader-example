<template>
  <div id="app" class="is-flex is-flex-direction-row">
   <b-menu>
     <b-menu-list>
       <b-menu-item label="Upload Files" />
       <b-menu-item label="View Files" />
     </b-menu-list>
   </b-menu>
   <section class="section is-full">
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
