<template>
  <Top />
  <router-view />
</template>
<script>
import Top from "./components/topMenu.vue";

</script>
<style scoped>
/* body{
  font-size: 3.43rem;
} */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
