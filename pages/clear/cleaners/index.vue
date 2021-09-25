<template>
  <div class="container">
    <v-card
      class="ml-2 mt-2"
      max-width="400"
      color="#74b9ff"
      v-for="(post, index) in posts"
      :key="index"
    >
      <v-list-item>
        <v-list-item-content>
          <div class="text-overline mb-4">{{ post.cleanerName }}</div>
          <v-list-item-title class="text-h5 mb-4">
            {{ post.cleanerSurname }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ post.cleanerEmail }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-btn
          outlined
          rounded
          text
          color="#ffeaa7"
          style="border-color: #ffeaa7"
        >
          Kullanıcı Detayları
        </v-btn>
      </v-list-item>

      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://localhost:44307/api/Cleaners/getcleanersdetail',
      posts: [],
    }
  },
  created() {
    this.$axios
      .get(this.url)
      .then((response) => (this.posts = response.data.data))
  },
}
</script>

<style scoped>
.ml-2 mt-2 {
  background-color: azure;
}
</style>
