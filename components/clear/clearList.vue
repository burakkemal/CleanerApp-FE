<template>
  <v-expansion-panels class="container" flat>
    <v-expansion-panel v-for="(item, i) in 7" :key="i">
      <v-expansion-panel-header color="#222f3e">
        Mevcut Temizlikler {{ i + 1 }}
      </v-expansion-panel-header>
      <v-expansion-panel-content color="#222f3e">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quos,
        culpa, sint officiis sequi, quia suscipit ex at quibusdam omnis sunt
        expedita nostrum architecto debitis dolorum in provident ab itaque.
        <v-btn class="ml-5" color="#2ecc71">İşi Tamamla</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<style scoped>
.container {
  height: auto;
}
</style>
<script>
export default {}
</script>
