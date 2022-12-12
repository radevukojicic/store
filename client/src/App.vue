<template>
  <div>
      <HeaderComp />
      <router-view/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,  
    }
};
</script>


<style>
select{
  color: black
}
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
a{
  text-decoration: none;
}
</style>
