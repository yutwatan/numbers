<template>
  <div class="home">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/views/Dashboard';

export default {
  name: 'Home',
  components: {
    Dashboard,
  }
};
</script>
