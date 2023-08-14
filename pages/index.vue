<template>
    Main Page
    <button>
        <nuxt-link to="/login">
            login
        </nuxt-link>
    </button>
    <div>
        {{ status }} - {{ data }}
    </div>
</template>

<script lang="ts" setup>
const { status, data } = useAuth()
</script>
