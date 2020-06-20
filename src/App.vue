<template>
  <v-app>
    <router-view />

    <v-footer app class="justify-center">
      <a
        href="https://github.com/maluzhenkov"
        target="_blank"
        rel="noopener noreferrer"
      >Николай Малюженков</a>
      &copy; {{ currentYear }}
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>