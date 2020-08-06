<template>
  <div class="app">
      <router-view/>
      <div class="application">
        <h1 class="application__title">WEEK-APP</h1>
      
        <div class="main">
          <list />
          <week />
        </div>
      </div>

  </div>
</template>

<script>
import Week from '@/components/Week';
import List from '@/components/List';
export default {
  name: 'Home',
  components: {
    'week': Week,
    'list': List,
  },
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
.app {
  max-width: 600px;
  margin: 0 auto;
}

.application {
  padding: 100px 0 0;
}

.application__title {
  margin: 0;
  padding: 0 0 40px;
}

.main {
  margin: 0;
  display: flex;
  justify-content: space-between;
}
</style>
