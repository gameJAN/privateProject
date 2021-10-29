<template>
  <div id="app">
    <transition name="fade" mode="out-in" v-if="isRouterAlive">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
      return {
          isRouterAlive: true
      }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
