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

    <UButton class="github submit" type="submit" @click="signInWithGitHub">
      <Github class="icon" />
      Sign up with Github
    </UButton>
  </UContainer>
</template>

<script setup lang="ts">
import { Sparkles, Github } from 'lucide-vue-next';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udchhbnbsgycesnvirnw.supabase.co'
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY2hoYm5ic2d5Y2VzbnZpcm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NjkwNTcsImV4cCI6MjAwNzI0NTA1N30.WRu7wJHYrVXcUadE-sFUT4YSYWq-kDnQe98s3GMeFMk")

const state = ref({
  email: undefined,
  password: undefined
})

const form = ref()

async function submit() {
  let { data, error } = await supabase.auth.signUp({
    email: "nils.ulmann@klangkonzept.ch",
    password: "test"
  })
}

///////////////////////

async function signInWithGitHub() {
  console.log("tst")
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}


</script>
<style lang="scss">
@use '~/css/login-old.scss';
</style>