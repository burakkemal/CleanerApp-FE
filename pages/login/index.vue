<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <v-form @submit="login">
          <h2 class="h3 mb-3 font-weight-normal">Giriş Yap</h2>
          <v-text-field label="Email" v-model="email" required></v-text-field>
          <v-text-field
            label="Şifre"
            v-model="password"
            required
          ></v-text-field>
        </v-form>
        <v-btn class="success" type="submit" @click="login"> Giriş Yap</v-btn>
        <v-btn class="primary" to="/login/register"> Kayıt Ol</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      alert()
      this.$axios
        .$post('https://localhost:44307/api/Auth/login', {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res != null && res != null) {
            setTimeout(() => {
              this.$toast.success('Giriş Başarılı')
              this.$router.push('/')
            }, 2000)
          } else {
            console.log('err *********' + res.data.message)
          }
        })
    },
  },
}
</script>

<style></style>
