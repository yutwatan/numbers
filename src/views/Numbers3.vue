<template>
  <v-container>
    <h1>Numbers 3</h1>
    <v-row class="text-center">
      <v-col cols="4">
        <RecentlyResults v-bind:kind="3"></RecentlyResults>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import RecentlyResults from '@/components/RecentlyResults';
  export default {
    name: 'Numbers3',
    components: {
      RecentlyResults
    }
  };
</script>

<style lang="scss" scoped>

</style>
