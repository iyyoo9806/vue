<script>

import { ref } from 'vue';
import { inject } from 'vue';

// example components
//네비게이션 바 가지고 오기
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
    const axios = inject('$axios');
    const mynick = ref('')
    // const refmyemail = ref(null);

    async function func_login() {
      try{
        let response = await axios.post('http://localhost:8030/api/login', { nickname:nickname.value});
        if(response.data == null){
          alert('로그인 실패 1')
        }else{
          console.log(response.data);

          location.href="/main"
        }
        // if(response.data.success){
        //   alert('로그인 성공');
        //   console.log(response.data);
        //   // 아래는 오류 다른 방식으로 session 유지해서 다른 페이지로 이동하게 하기
        //   // routerKey.push('/main')
        //   location.href="/main"
        // }else{
        //   alert('로그인 실패 1')
        // }
      }catch(error){
        console.log('로그인 실패2');
        console.log(error);
      }
    }
    // onMounted(() => {
    //   setMaterialInput();
    // })
    return{
      mynick,
      func_login,
      // refmyemail
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
                    닉네임 입력
                  </h4>

                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start" @submit.prevent>
                  <!-- code modified by hwy -->
                  <div class="input-group input-group-outline my-3">
                    <input v-model="mynick" id="nickname" class="form-control form-control-md" 
                    type="nickname" placeholder="please enter nickname"/>
                  </div>

                  <div class="text-center">
                    <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                      @click="func_login"
                      >access</MaterialButton
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>
