<template>
  <header class="header">
    <div class="navbar">
      <div class="left">
        <div class="logo-name">
          <p id="logo">⌘</p>
          <h1 class="name">Tweetify</h1>
        </div>
        <NuxtLink class="link" to="/profile">Profile</NuxtLink>
        <NuxtLink class="link" to="/blog">Blog</NuxtLink>
      </div>
      <div id="right" class="right">
        <NuxtLink class="sing-up account" to="/sign-up">Sign Up</NuxtLink>
        <NuxtLink class="login button account" to="/login">Login</NuxtLink>
        <img src="{{ user_avatar }}" alt="">
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udchhbnbsgycesnvirnw.supabase.co'
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY2hoYm5ic2d5Y2VzbnZpcm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NjkwNTcsImV4cCI6MjAwNzI0NTA1N30.WRu7wJHYrVXcUadE-sFUT4YSYWq-kDnQe98s3GMeFMk")

const { data: { user } } = await supabase.auth.getUser()

export default {
  data() {
    return {
      user_avatar: null,
    }
  },
  mounted() {
    var right = document.getElementById("right")

    if (user) {
      this.user_avatar = user.user_metadata.avatar_url;
      right.style.display = "none";
    }
  }
}

</script>

<style>
.header {
  max-width: 1400px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 2rem;
  font-size: 14px;
}

.navbar {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.left {
  align-items: center;
  display: flex;
  gap: 24px;
  justify-self: left;
}

.right {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-self: right;
}

.button {
  background-color: #0f0e24;
  display: inline-flex;
  padding: 10px;
  padding-inline: 16px;
  border-radius: 8px;
  font-weight: 500;
}

.account {
  align-self: right;
  display: inline-flex;
}

#logo{
  font-size: 26px;
}

.logo-name{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.name{
  font-size: 20px;
  font-weight: 500;
  margin-right: 24px;
}
</style>