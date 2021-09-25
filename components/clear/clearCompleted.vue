<template>
  <v-expansion-panels class="container" flat>
    <v-expansion-panel
        v-for="(item,i) in 4"
        :key="i"
    >
      <v-expansion-panel-header color="#222f3e">
        Tamamlanmış Görevler {{i+1}}
      </v-expansion-panel-header>
      <v-expansion-panel-content color="#222f3e">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <v-btn
            class="ml-5"
            color="#2ecc71"
        >İşi Tamamla</v-btn>
      </v-expansion-panel-content>

    </v-expansion-panel>
  </v-expansion-panels>
</template>
<style scoped>
.container{
  height: auto;
}
</style>