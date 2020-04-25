<template>
  <v-container>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title grey--text text--darken-2">
          Navigation lists
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item v-for="nav in nav_list" :key="nav.name">
        <v-list-item-icon>
          <v-icon>{{nav.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{nav.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
  export default {
    name: 'Navigation',
    data: () => ({
      nav_list: [
        {name: 'Numbers 3', icon: 'mdi-vuetify'},
        {name: 'Numbers 4', icon: 'mdi-vuetify'},
      ]
    })
  }
</script>

<style scoped>

</style>
