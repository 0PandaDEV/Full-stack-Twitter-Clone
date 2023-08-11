<template>
  <Navbar/>
  <section class="hero">
    <div class="container">
      <a href="https://twitter.com/pandadev_" target="_blank" class="twitter">
        Follow along on Twitter
      </a>
      <h1 class="title">An example Twitter clone built using Nuxt.js 3 and Supabase.</h1>
      <h2 class="description">I'm building a web app with Nuxt.js 3 and contributing to open source. Take a look to see what I've done so far.</h2>
      <div class="buttons">
        <nuxt-link class="get-started" to="/login">Get Started</nuxt-link>
        <a class="github-index" href="https://github.com/0PandaDEV/Full-stack-Twitter-Clone" target="_blank">Github</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udchhbnbsgycesnvirnw.supabase.co'
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY2hoYm5ic2d5Y2VzbnZpcm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NjkwNTcsImV4cCI6MjAwNzI0NTA1N30.WRu7wJHYrVXcUadE-sFUT4YSYWq-kDnQe98s3GMeFMk")

const { data: { user } } = await supabase.auth.getUser()
</script>

<style>
@import '~/css/style.css';
</style>