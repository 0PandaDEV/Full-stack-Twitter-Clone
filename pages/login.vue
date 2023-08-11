<template>
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
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Github-Icon">
            <path
              d="M0 8.13114C0 3.64044 3.58173 0 8.00001 0C12.4183 0 16 3.64044 16 8.13114C16 11.8971 13.481 15.0755 10.0621 16C9.07641 15.8687 8.84205 15.9896 8.12904 15.9896C3.71076 15.9896 8.02326 14.3511 5.93788 15.9896C2.58625 15.2114 0 12.6218 0 8.13114Z"
              id="Oval" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
            <path
              d="M3.87157 3.40983L4.51613 3.40983L6.06452 4.32786L8 3.93441L10.0645 4.32786L11.6129 3.40983L12.2581 3.40983L12.3871 5.77047L12.9032 6.29506L13.1613 6.81965L13.1613 8.26227L12.9032 8.918L12.7742 9.57374L12.5161 9.83604L12.129 10.3606L11.7419 10.4918L11.2258 10.7541L10.5806 11.0164L10.0645 11.0164L9.29032 11.0164L9.54839 11.5409L9.80645 11.8032L9.93548 12.3278L10.0645 12.8524L10.0645 13.9016L10.0645 14.5573L9.80645 15.0819L9.80645 15.4754L10.0645 15.7377L10.0645 16L5.93548 16L5.93548 15.6065L5.93548 13.5082L4.90323 13.377L4.12903 13.1147L3.6129 12.8524L3.35484 12.5901L3.09677 12.0655L2.83871 11.6721L2.58065 11.2787L2.19355 11.1475L2.06452 10.7541L2.58065 10.7541L2.96774 10.7541L3.09677 11.0164L3.35484 11.2787L3.48387 11.4098L3.74194 11.6721L3.74194 11.8032L3.87097 11.8032L4.12903 12.0655L3.92312 12.1967L4.10392 12.3278L4.12903 12.3278L4.3871 12.0655L4.64516 12.3278L4.49347 12.5591L4.51613 12.5901L4.77419 12.3278L5.03226 12.3278L5.03226 12.7213L5.16129 12.5901L5.29032 12.3278L5.67742 12.3278L5.67742 12.7126L5.80645 12.6408L5.93548 12.3278L6.19355 11.8032L6.45161 11.4098L6.45161 11.0164L5.67742 11.0164L4.90323 10.7541L4.3871 10.4918L3.87097 10.2295L3.6129 9.83604L3.35484 9.57374L3.09677 9.04915L2.96774 8.39342L2.83871 7.86883L2.83871 6.9508L3.09677 6.55736L3.35484 5.90162L3.6129 5.77047L3.6129 5.50818L3.6129 5.11474L3.35484 4.85244L3.48387 4.19671L3.6129 3.93441L3.6129 3.40983L3.87157 3.40983Z"
              id="Vector" fill="#000000" fill-rule="evenodd" stroke="none" />
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
    email: "nils.ulmann@klangkonzept.ch"
  })
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

<style>@import '~/css/login.css';</style>