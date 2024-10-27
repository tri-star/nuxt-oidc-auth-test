<script setup lang="ts">
const {user} = useOidcAuth();
</script>

<template>
  <div>User: </div>
  <pre>{{ user }}</pre>
</template>

<style scoped>
</style>