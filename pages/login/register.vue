<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <v-form @submit="login">
          <h2 class="h3 mb-3 font-weight-normal">Kayıt Ol</h2>
          <v-text-field
            v-model="firstname"
            label="İsim"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            label="Soyisim"
            required
          ></v-text-field>
          <v-text-field v-model="email" label="Email" required> </v-text-field>
          <v-text-field
            v-model="password"
            label="Şifre"
            required
          ></v-text-field>
        </v-form>
        <v-btn class="success mr-5" type="submit" @click="register">
          Kayıt Ol</v-btn
        >

        <v-label class="mx-5">Hesabın Var mı ? </v-label>
        <v-btn class="primary ml-5" to="/login"> Giriş Yap</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      alert()
      this.$axios
        .$post('https://localhost:44307/api/Auth/register', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res)
          if (res != null && res != null) {
            this.$toast.success('Kayıt Başarılı')
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
