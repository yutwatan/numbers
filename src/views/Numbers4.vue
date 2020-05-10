<template>
  <v-container>
    <h1>Numbers 4</h1>

    <v-row class="text-center">
      <v-col cols="12" sm="6" md="4">
        <RecentlyResults v-bind:kind="4" v-bind:show-menu="true"></RecentlyResults>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <SearchNumber v-bind:kind="4" v-bind:number="1234"></SearchNumber>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <StatisticsMode v-bind:kind="4" v-bind:items-per-page="9"></StatisticsMode>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import RecentlyResults from '@/components/RecentlyResults';
  import SearchNumber from '@/components/SearchNumber';
  import StatisticsMode from '@/components/StatisticsMode';
  export default {
    name: 'Numbers4',
    components: {
      RecentlyResults,
      SearchNumber,
      StatisticsMode,
    }
  };
</script>

<style scoped>

</style>
