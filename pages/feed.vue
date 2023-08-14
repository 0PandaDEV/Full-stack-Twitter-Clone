<template>
  <div class="feed">
    <div v-for="post in posts" :key="post.id">
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
      posts: []
    }
  },
  async created() {
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('userid', user?.id)
    if (error) {
      console.error(error);
    } else {
      this.posts = data;
    }
  }
}
</script>

<style>
@import '~/css/feed.css';
</style>