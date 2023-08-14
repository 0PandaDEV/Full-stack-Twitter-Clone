<template>
  <div class="new-post">
    <UTextarea class="input text" autoresize v-model="text" placeholder="text" />
    <UButton class="post-button" @click="submit">Post</UButton>
  </div>
  <div class="user-posts">
    <div v-for="post in userPosts" :key="post.id">
      <h3>{{ post.username }}</h3>
      <p>{{ post.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udchhbnbsgycesnvirnw.supabase.co'
const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY2hoYm5ic2d5Y2VzbnZpcm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NjkwNTcsImV4cCI6MjAwNzI0NTA1N30.WRu7wJHYrVXcUadE-sFUT4YSYWq-kDnQe98s3GMeFMk")

export default {
  data() {
    return {
      text: '',
      userid: null,
      userPosts: []
    }
  },
  async created() {
    const { data: { user } } = await supabase.auth.getUser()
    this.userid = user?.id
    this.fetchUserPosts()
  },
  methods: {
    async fetchUserPosts() {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('userid', this.userid)
      if (error) {
        console.error(error);
      } else {
        this.userPosts = data;
      }
    },
    async submit() {
      const { data, error } = await supabase
        .from('posts')
        .insert([
          { userid: this.userid, text: this.text, id: generateUniqueId() },
        ])
      if (error) {
        console.error(error);
      } else {
        this.text = ''; // Clear the input field after successful submission
        this.fetchUserPosts(); // Fetch the updated user posts after submission
      }
    }
  }
}

function generateUniqueId() {
  // Generate a unique ID for the new post
  // You can use a library like uuid or generate a unique ID based on your requirements
  // For simplicity, this function generates a random 8-character alphanumeric ID
  const characters = '0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
}
</script>

<style>
@import '~/css/post.css';
</style>