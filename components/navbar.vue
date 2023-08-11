<template>
  <header class="header">
    <div class="navbar">
      <div class="left">
        <NuxtLink class="link" to="/profile">Profile</NuxtLink>
        <NuxtLink class="link" to="/blog">Blog</NuxtLink>
      </div>
      <div class="right">
        <NuxtLink class="sing-up account" to="/sing-up">Sign Up</NuxtLink>
        <NuxtLink class="login button account" to="/login">Login</NuxtLink>
      </div>
    </div>
  </header>
</template>


<style>
.header {
  max-width: 1400px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 2rem;
}

.navbar {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.left {
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
  border-radius: 10px;
}

.account {
  align-self: right;
  display: inline-flex;
}
</style>