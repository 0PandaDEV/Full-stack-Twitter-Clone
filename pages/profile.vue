<template>
  <button type="submit" @click="logOut">Logout</button>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udchhbnbsgycesnvirnw.supabase.co'
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY2hoYm5ic2d5Y2VzbnZpcm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NjkwNTcsImV4cCI6MjAwNzI0NTA1N30.WRu7wJHYrVXcUadE-sFUT4YSYWq-kDnQe98s3GMeFMk")

const { data: { user } } = await supabase.auth.getUser()

if (user) {
  console.log(user.user_metadata.name)
} else{
  console.log("no user")
}

async function logOut() {
  if (user) {
    console.log("log out")
    let { error } = await supabase.auth.signOut()
  }
}

</script>