<template>
  <div class="container">
    <v-form>
      <v-layout row wrap>
        <v-flex xs12 md6 class="pink--text">
          <div class="container">
            <v-flex xs12 md8 class="greyBorder blue-grey lighten-5">
              <br />
              <div class="indigo text-center">
                <span class="white--text">ODA EKSİKLERİ</span>
              </div>
              <div
                class="mr-4 ml-12"
                v-for="object in objects"
                :key="object.name"
              >
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-checkbox
                      light
                      :label="object.name"
                      v-model="object.selected"
                    >
                    </v-checkbox>
                  </v-flex>
                </v-layout>
              </div>
            </v-flex>
          </div>
        </v-flex>
        <v-flex xs12 md6>
          <v-col cols="12">
            <v-textarea color="teal">
              <template v-slot:label>
                <div>Açıklama <small>(isteğe bağlı)</small></div>
              </template>
            </v-textarea>
          </v-col>
          <v-btn class="success"> Gönder </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      url: 'https://localhost:44307/api/Objects/getall',
      objects: [{ selected: false }],
    }
  },
  created() {
    axios.get(this.url).then((response) => (this.objects = response.data.data))
  },
}
</script>
<style>
.success {
  background-color: #17c0eb;
}
.ml-4 {
  margin-bottom: 10px;
  display: flex;
}
.container {
  background-color: #222f3e;
  height: 500px;
}
</style>
