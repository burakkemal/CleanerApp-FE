<template>
  <div class="container">
    <v-form @submit="add" ref="form">
      <v-text-field v-model="name" label="Eksikler" required></v-text-field>

      <v-btn color="success" class="mr-4" @click="add"> Gönder </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Formu Sıfırla </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://localhost:44307/api/Objects/add',
      Name: '',
    }
  },
  methods: {
    reset() {
      this.$refs.form.reset()
    },
    add() {
      console.log(this.name)
      this.$axios
        .$post('https://localhost:44307/api/Objects/add', {
          Name: this.Name,
        })
        .then((res) => {
          console.log(res)
          if (res != null && res != null) {
            this.$toast.success('Ekleme Başarılı')
            this.$router.push('/')
          } else {
            console.log('err *********' + res.message)
          }
        })
    },
  },
}
</script>

<style></style>
