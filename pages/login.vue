<template>
  <nuxt-link to="/" class="back-button"><svg width="5px" height="9px" viewBox="0 0 5 9" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.88554 6.07319C1.83988 6.07319 3.72935 7.98322 3.6933 7.94733L0.191077 4.46034C-0.0636923 4.20668 -0.0636923 3.79028 0.191077 3.53662L3.69298 0.0520487C3.76268 -0.0173497 3.87805 -0.0173497 3.94772 0.0520487C4.01742 0.121447 4.01742 0.236312 3.94772 0.30571L0.445846 3.79028C0.330479 3.90516 0.330479 4.0918 0.445846 4.20668L3.94772 7.69369C4.01743 7.76307 4.01743 7.87793 3.94772 7.94735C3.9117 7.98084 3.85213 7.98679 3.82037 7.99993C3.78861 8.01307 1.88554 6.07319 1.88554 6.07319Z" id="Shape" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1" />
    </svg><p>Back</p></nuxt-link>
  <div class="body">

    <h2 class="logo">⌘</h2>
    <h1 class="title">Welcome back</h1>
    <p class="description">Enter your email to sign in to your account</p>
  
    <UForm class="form" ref="form" :validate="validate" :state="state" @submit.prevent="submit">
      <UInput class="email-input" placeholder="username@example.com" v-model="state.email" />
  
      <UButton class="sign-in" type="submit" @click="submit">
        Sign In with Email
      </UButton>
  
      <div class="divider">
        <div class="div1"></div>
        <p class="divider-text">OR CONTINUE WITH</p>
        <div class="div2"></div>
      </div>
  
      <UButton class="github" @click="signInWithGitHub">
        <svg width="16px" height="16px" viewBox="0 0 24 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path d="M24 0L24 0L24 24L0 24L0 0L24 0Z" id="path_1" />
      <clipPath id="clip_1">
        <use xlink:href="#path_1" />
      </clipPath>
    </defs>
    <g id="github-seeklogo.com" clip-path="url(#clip_1)">
      <path d="M24 0L24 0L24 24L0 24L0 0L24 0Z" id="github-seeklogo.com" fill="none" stroke="none" />
      <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0L12 0Z" id="path833" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
    </g>
  </svg>
        Github
      </UButton>
  
    </UForm>
    <nuxt-link to="/sign-up" class="sign-up">Don't have an account? Sign up</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { FormError } from '@nuxthq/ui/dist/runtime/types'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udchhbnbsgycesnvirnw.supabase.co'
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY2hoYm5ic2d5Y2VzbnZpcm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NjkwNTcsImV4cCI6MjAwNzI0NTA1N30.WRu7wJHYrVXcUadE-sFUT4YSYWq-kDnQe98s3GMeFMk")

const state = ref({
  email: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Required' })
  return errors
}

const form = ref()


async function submit() {
  await form.value!.validate()
  let { data, error } = await supabase.auth.signInWithOtp({
    email: state.value.email
  })
  navigateTo("/email-confirmation")
}

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })

  console.log("data")
  console.log(data)
  console.log("data")
}
</script>

<style lang="scss">
@use '~/css/login.scss';
</style>