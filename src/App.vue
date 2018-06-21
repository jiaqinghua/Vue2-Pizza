<template>
  <div id="app">
    <div class="container">
      <appHeader></appHeader>
    </div>


    
  <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="new"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="order"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="express"></router-view>
        </div>
      </div>
    </div>
  </div>
    

  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components:{
    appHeader:Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app{
  max-width: 1200px;
  margin:0 auto;
}
</style>
