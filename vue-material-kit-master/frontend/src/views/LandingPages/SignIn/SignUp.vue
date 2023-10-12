<script>

import { ref } from 'vue'
import { onMounted } from "vue";

// example components

import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input

import setMaterialInput from "@/assets/js/material-input";

export default {

  components: {
    DefaultNavbar,
    Header,
    MaterialInput,
    MaterialSwitch,
    MaterialButton,
    setMaterialInput
  },

  setup() {

    const myemail = ref('')
    const mypwd = ref('')
    const refmyemail = ref(null);

    function func_signin() {
      console.log("sign in ",myemail,mypwd)
      console.log(refmyemail._value.value)
      // this.$router.push({name : 'main'})
    }

    onMounted(() => {
      setMaterialInput();
    })

    return{
      myemail,
      mypwd,
      func_signin,
      refmyemail
    }

  },

}

</script>
<template>
  <!-- 네비게이션 바 (변경을 DefaultNavbar에서) -->
  <!-- 아래 입력하면 네비게이션 바 생김 -->
  <!-- <DefaultNavbar transparent /> -->
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)'
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    Sign up
                  </h4>

                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start" @submit.prevent>
                  <!-- code modified by hwy -->

                  <div class="input-group input-group-outline my-3">
                    <input v-model="myemail" id="email" class="form-control form-control-md" 
                    type="email" ref="refmyemail" placeholder="email"/>
                  </div>
                  <div class="input-group input-group-outline my-3">
                    <input v-model="mypwd" id="password" class="form-control form-control-md" 
                    type="password" placeholder="password"/>
                  </div>

                  <div class="text-center">
                    <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                      @click="func_signin"
                      >Sign in</MaterialButton
                    >
                  </div>
                  <p class="mt-4 text-sm text-center">
                    <a
                      href="/"
                      class="text-success text-gradient font-weight-bold"
                      >back</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>
