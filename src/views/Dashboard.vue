<template>
  <v-container>
    <h1>Dashboard</h1>

    <v-row class="text-center">
      <v-col cols="12" sm="6" md="6">
        <h2>Numbers 3</h2>
        <div class="my-4 mb-10">
          <RecentlyResults v-bind:kind="3" v-bind:show-menu="false"></RecentlyResults>
        </div>
        <div class="my-4 mb-10">
          <StatisticsMode v-bind:kind="3" v-bind:items-per-page="3"></StatisticsMode>
        </div>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <h2>Numbers 4</h2>
        <div class="my-4 mb-10">
          <RecentlyResults v-bind:kind="4" v-bind:show-menu="false"></RecentlyResults>
        </div>
        <div class="my-4 mb-10">
          <StatisticsMode v-bind:kind="4" v-bind:items-per-page="3"></StatisticsMode>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import RecentlyResults from '@/components/RecentlyResults';
  import StatisticsMode from '@/components/StatisticsMode';
  export default {
    name: 'Dashboard',
    components: {
      RecentlyResults,
      StatisticsMode,
    }
  };
</script>

<style lang="scss" scoped>

</style>
