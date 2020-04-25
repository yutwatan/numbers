<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <Navigation></Navigation>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title>Numbers 可視化・分析ツール</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn text>Support</v-btn>
      <div>
        <v-btn text>Help</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <Dashboard></Dashboard>
    </v-content>

    <v-footer app color="primary" dark>
      &copy; 2020 yutwatan
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';

export default {
  name: 'App',

  components: {
    Navigation,
    Dashboard,
  },

  data: () => ({
    drawer: null,
  }),
};
</script>
