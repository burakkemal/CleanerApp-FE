<template>
  <v-app>
    <v-navigation-drawer
      color="#0984e3"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list color="#2e86de">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="top1">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#2e86de" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn color="grey" to="/login"
        >Giriş Yap <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid class="mdi5">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer dark
      ><p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
        aspernatur nobis blanditiis at. Et autem, iure aliquid a minima
        repellendus, pariatur necessitatibus unde ratione voluptas quis commodi
        nisi distinctio vel!
      </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      props: {
        isLogin: false,
      },
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Ana Sayfa',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Clear',
          to: '/clear/clearAdd',
        },
        {
          icon: 'mdi-chart-donut-variant',
          title: 'Mevcut Temizlikler',
          to: '/clear',
        },
        {
          icon: 'mdi-chart-box',
          title: 'Tamamlanan Temizlikler',
          to: '/clear/clearCompleted',
        },
        {
          icon: 'mdi-chart-box',
          title: 'Nesne Ekle',
          to: '/clear/clearAdd/objectAdd',
        },
        {
          icon: 'mdi-chart-box',
          title: 'Çalışanlar',
          to: '/clear/cleaners',
        },
      ],
      miniVariant: false,
      title: 'Hastane Temizlik Takip Sistemi',
    }
  },
}
</script>
<style scoped>
.v-application {
  background-color: white;
}
.mdi5 {
  background-color: #c8d6e5;
  height: 783px;
}
</style>
