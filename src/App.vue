<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <Navigation></Navigation>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            Numbers 可視化・分析ツール
          </router-link>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn text>Support</v-btn>
      <div>
        <v-btn text to="/help">Help</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer app color="primary" dark>
      &copy; 2020 yutwatan
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'App',

  components: {
    Navigation,
  },

  data: () => ({
    drawer: null,
  }),
};
</script>
