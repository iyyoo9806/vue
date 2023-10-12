<script setup>
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import { inject } from 'vue';
const axios = inject('$axios');
axios.get('http://localhost:8030/getUserInfo')
.then(response => {
  let nickname = response.data;
  console.log(nickname);
})
.catch(error => {

})
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
  </Header>

</template>
