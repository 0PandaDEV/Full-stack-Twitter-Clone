<template>
  <UContainer class="contianer">
    <h1 class="title">Signup</h1>
    <p class="description">Sign up to join this awesome platfrom made for people by people.</p>
    <UForm ref="form" :state="state" @submit.prevent="submit">
      <UFormGroup class="email" label="Email" name="email">
        <UInput class="email-input" v-model="state.email" />
      </UFormGroup>

      <UFormGroup class="password" label="Password" name="password">
        <UInput class="password-input" v-model="state.password" type="password" />
      </UFormGroup>

      <UButton class="submit" type="submit">
        <Sparkles class="sparkles icon" />
        Sign up
      </UButton>
    </UForm>

    <UButton class="github submit" type="submit">
      <Github class="icon" />
      Sign up with Github
    </UButton>
  </UContainer>
</template>

<script setup lang="ts">
import { Sparkles, Github } from 'lucide-vue-next';

const state = ref({
  email: undefined,
  password: undefined
})

const form = ref()

async function submit() {
  // Do something with state.value
}

///////////////////////

//auth


</script>

<style>
@import '~/css/login.css';
</style>