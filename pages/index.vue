<template>
Main Page
<button><nuxt-link to="/login">login</nuxt-link></button>
</template>

<script setup lang="ts">
definePageMeta({ auth: false })
</script>