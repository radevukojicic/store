<template>
  <header>
     <nav>
      <router-link to="/">
      <h3 class="logo">Logo</h3>
      </router-link>
      <h3>Pretraga</h3>
      <div class="icons">
        <router-link to="/cart">
        <div class="cart">
        <v-icon>fa-cart-shopping</v-icon>
        <span class="circle">{{totalQty}}</span>
        </div>
       </router-link>
      </div>
     </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderComp",
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
}
header {
  height: 55px;
  display: flex;
  justify-content: center;
  margin-bottom: 10vh;
}
nav{
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.circle{
  background-color: #bd0d00;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  display: flex;
  margin-top: -38px;
  margin-left: 21px;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;

}
</style>
