<script setup lang="ts">
const {user} = useOidcAuth();
</script>

<template>
  <div>User: {{ user }}</div>
</template>

<style scoped>
</style>