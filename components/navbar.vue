<template>
  <header class="header">
    <div class="navbar">
      <div class="left">
        <div class="logo-name">
          <p id="logo">⌘</p>
          <h1 class="name">Tweetify</h1>
        </div>
        <NuxtLink class="link" to="/blog">Blog</NuxtLink>
        <a class="link" href="https://github.com/0PandaDEV/Tweetify-Twitter-Clone/issues" target="_blank">Issues</a>
      </div>
      <div class="right">
        <NuxtLink id="account" class="sing-up account" to="/sign-up">Sign Up</NuxtLink>
        <NuxtLink id="account" class="login button account" to="/login">Login</NuxtLink>
        <UPopover>
          <img src="/avatar.png" id="avatar">

          <template #panel>
            <div class="popover">
              <NuxtLink class="popover-link" to="/profile">Profile</NuxtLink>
              <div class="popover-divider"></div>
              <button class="popover-link" @click="logOut">Log Out</button>
            </div>
          </template>
        </UPopover>
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
    var account = document.getElementsByClassName("account")
    var avatar = document.getElementById("avatar")

    if (user) {
      console.log(user)
      if (user.user_metadata.avatar_url) {
        avatar.src = user.user_metadata.avatar_url;
      }
      account[0].style.display = "none";
      account[1].style.display = "none";
      avatar.style.display = "block";
    }
  },
  methods: {
    async logOut() {
      if (user) {
        await supabase.auth.signOut()
        navigateTo("/login")
        location.reload()
      }
    }
  }
}
</script>

<style>
#avatar {
  height: 40px;
  border-radius: 100px;
  display: none;
}

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

#logo {
  font-size: 26px;
}

.logo-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.name {
  font-size: 20px;
  font-weight: 500;
  margin-right: 24px;
}

.popover {
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #0e1424;
  border-radius: 8px;
  width: 100px;
}

.popover-link {
  padding: 6px;
  padding-inline: 8px;
  text-align: left;
}

.popover-link:hover {
  background-color: #2b2945;
  border-radius: 4px;
}

.popover-divider {
  background-color: #2b2945;
  height: 1px;
  width: 66px;
  margin: 4px;
  margin-inline: 0;
  align-self: center;
}
</style>